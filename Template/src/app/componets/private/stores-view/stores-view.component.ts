import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { IGenericPaginatorRequestN } from 'src/app/interfaces/generic';
import { StoreService } from 'src/app/services/store.service';
import { DialogAddStoreArticleComponent } from '../../dialogs/dialog-add-store-article/dialog-add-store-article.component';
import { IStore } from 'src/app/interfaces/store';
import { Subscription } from 'rxjs';
import { DialogUpdateStoreComponent } from '../../dialogs/dialog-update-store/dialog-update-store.component';
import { DialogAddStoreComponent } from '../../dialogs/dialog-add-store/dialog-add-store.component';

@Component({
  selector: 'app-stores-view',
  templateUrl: './stores-view.component.html',
  styleUrls: ['./stores-view.component.scss']
})
export class StoresViewComponent implements OnInit, OnDestroy {
  public storeList: IStore[] = [];
  public totalRecords: number = 0;
  public loading: boolean = true;
  public page = 0;
  public recordsByPage = 10;
  private subs: Subscription[] = [];

  constructor(
    private storeService: StoreService,
    private messageService: MessageService,
    private dialogService: DialogService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subs.forEach(item => {
      item.unsubscribe;
    });
  }

  public loadStores(event?: LazyLoadEvent){
    this.loading = true;
    this.page = 0;
    this.recordsByPage = 10;

    if(event && event.first && event.rows){
      this.page = event.first;
      this.recordsByPage = event.rows;
    }

    let paginator: IGenericPaginatorRequestN = {page: this.page, recordsByPage: this.recordsByPage};

    this.storeService.getFull(paginator).then(data=>{
      this.storeList =  data.data.data;
      this.totalRecords = data.data.totalRecords;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }).catch(()=>{
      this.messageService.add({severity:"error",summary:"Error", detail: "Error de Servicios Intente mas tarde"});
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    });
  }

  public onShowAddStore(){
    const ref = this.dialogService.open(DialogAddStoreComponent,{
      modal: true,
      width: 'auto'
    });

    this.subs.push(
      ref.onClose.subscribe(data=>{
        if(data == 2)
        {
          this.loadStores();
        }
      })
    );

  }

  public onShowUpdateStore(model: IStore){
    const ref = this.dialogService.open(DialogUpdateStoreComponent,{
      modal: true,
      data: model,
      width: 'auto'
    });

    this.subs.push(
      ref.onClose.subscribe(data=>{
        if(data == 2)
        {
          this.loadStores();
        }
      })
    );
  }

  public onDeleteStore(event: any,id: string){
    this.confirmationService.confirm({
      target: event.target,
      message: 'Seguro que quiere borrar esta Tienda?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.storeService.delete(id).then(data=>{
          this.loadStores();
          this.messageService.add({severity:"succes",summary:"Satisfactorio", detail: data.message});
        })
        .catch(()=>{
          this.messageService.add({severity:"error",summary:"Error", detail: "Error de Servicios Intente mas tarde"});
          setTimeout(() => {
            this.loading = false;
          }, 1000);
        });
      },
    });
  }

}
