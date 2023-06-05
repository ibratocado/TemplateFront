import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, MessageService } from 'primeng/api';
import { IGenericPaginatorParameterRequest } from 'src/app/interfaces/generic';
import { IUserRespon } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public list: IUserRespon[] = [];
  public loading: boolean = true;
  public listSelected = [];
  public selectAll: boolean = false;
  public page: number = 0;
  public totalRecords: number = 0;
  public recordsByPage: number = 10;

  constructor(private userService: UsersService,
    private messagService: MessageService) { }

  ngOnInit(): void {
    console.log("tamos en el table")
  }

  public load(event: LazyLoadEvent){
    this.loading = true;
    this.page = 0;

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
      console.log(err);
      this.loading = false;
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
