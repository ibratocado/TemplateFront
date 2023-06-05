import { Component, OnInit } from '@angular/core';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { IGenericPaginatorParameterRequest } from 'src/app/interfaces/generic';
import { IUserRespon } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';
import { Subscription } from 'rxjs';
import { UsersDialogUpdateComponent } from '../users-dialog-update/users-dialog-update.component';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {

  public list: IUserRespon[] = [];
  public loading: boolean = true;
  public listSelected = [];
  public selectAll: boolean = false;
  public page: number = 0;
  public totalRecords: number = 0;
  public recordsByPage: number = 10;
  private subs: Subscription[] = [];

  constructor(
    private userService: UsersService,
    private messagService: MessageService,
    private confirmationService: ConfirmationService,
    private dialogService: DialogService) { }

  ngOnInit(): void {
    console.log("tamos en el table")
  }

  public load(event?: LazyLoadEvent){
    this.loading = true;

    if(event && event.first){
      this.page = event.first;
    }

    let paginator: IGenericPaginatorParameterRequest<string> = {
      page: this.page,
      recordsByPage: this.recordsByPage
    };


    this.userService.getPaginator(paginator)
    .then(data=>{
      console.log(data);
      this.loading = false;
      if(data.data.totalRecords==0){
        this.messagService.add({severity: "info", summary: "Info", detail: data.message});
        return;
      }

      this.list = data.data.data;
      this.page = data.data.page;
      this.totalRecords = data.data.totalRecords;
    })
    .catch(err=>{
      console.log(err.message);
      this.messagService.add({severity: "error", summary: "Error", detail: err.message});
      this.loading = false;
    });
  }

  public onUpdate(model: IUserRespon){
    const ref = this.dialogService.open(UsersDialogUpdateComponent,{
      header: "Editar Usuario",
      modal: true,
      width: 'auto',
      data: model
    });

    this.subs.push(
      ref.onClose.subscribe(data=>{
        if(data == 2)
        {
          this.load();
        }
      })
    );
  }

  public onDelete(event: any,id: string){
    this.confirmationService.confirm({
      target: event.target,
      message: 'Desea eliminar este registro?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.deleteUser(id);
      }
    });
  }

  private deleteUser(id: string){
    this.userService.deleteLogic(id)
    .then(data =>{
      this.messagService.add({severity: "success", summary: "Satisfactorio", detail: data.message+": "+id});
      this.page = 0;
      this.load();
    })
    .catch(err =>{
      this.messagService.add({severity: "error", summary: "Error", detail: err.message});
    });
  }

  public onSelectionChange(event = []){
    this.selectAll = event.length === this.totalRecords;
        this.listSelected = event;
  }

  public onSelectionAllChange(event: any){
    const checked = event.checked;

    if(checked){
      this.listSelected = this.listSelected;
      this.selectAll = true;
    }

    else{
      this.listSelected = [];
      this.selectAll = false;
    }

  }

}
