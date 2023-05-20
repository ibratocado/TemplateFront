import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ICustomer } from 'src/app/interfaces/customer';
import { IGenericPaginatorRequestN } from 'src/app/interfaces/generic';
import { CustomerService } from 'src/app/services/customer.service';
import { DialogAddCustomerComponent } from '../../dialogs/dialog-add-customer/dialog-add-customer.component';
import { DialogUpdateCustomerComponent } from '../../dialogs/dialog-update-customer/dialog-update-customer.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customers-view',
  templateUrl: './customers-view.component.html',
  styleUrls: ['./customers-view.component.scss']
})
export class CustomersViewComponent implements OnInit, OnDestroy {

  public customerList: ICustomer[] = [];
  public totalRecords: number = 0;
  public loading: boolean = true;
  public page = 0;
  public recordsByPage = 10;

  private subs: Subscription[] = [];

  constructor(
    private customerService: CustomerService,
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


  public loadCustomers(event?: LazyLoadEvent){
    this.loading = true;
    this.page = 0;
    this.recordsByPage = 10;

    if(event && event.first && event.rows){
      this.page = event.first;
      this.recordsByPage = event.rows;
    }

    let paginator: IGenericPaginatorRequestN = {page: this.page, recordsByPage: this.recordsByPage};

    this.customerService.getFull(paginator).then(data=>{
      console.log("articles",data);
      this.customerList =  data.data.data;
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

  public onShowAddCustomer(){
    const ref = this.dialogService.open(DialogAddCustomerComponent,{
      modal: true,
      width: 'auto'
    });

    this.subs.push(
      ref.onClose.subscribe(data=>{
        if(data == 2)
        {
          this.loadCustomers();
        }
      })
    );

  }

  public onShowUpdateCustomer(model: ICustomer){
    const ref = this.dialogService.open(DialogUpdateCustomerComponent,{
      modal: true,
      data: model,
      width: 'auto'
    });
  }

  public onDeleteCustomer(event: any,id: string){
    this.confirmationService.confirm({
      target: event.target,
      message: 'Seguro que quiere borrar este Cliente?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.customerService.delete(id).then((data)=>{
          this.loadCustomers();
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
