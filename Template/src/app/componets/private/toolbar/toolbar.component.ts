import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { DialogAddArticleComponent } from '../../dialogs/dialog-add-article/dialog-add-article.component';
import { DialogAddCustomerComponent } from '../../dialogs/dialog-add-customer/dialog-add-customer.component';
import { DialogAddStoreComponent } from '../../dialogs/dialog-add-store/dialog-add-store.component';
import { DialogAddStoreArticleComponent } from '../../dialogs/dialog-add-store-article/dialog-add-store-article.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
  }

  public onShowAddArticle(){
    const ref = this.dialogService.open(DialogAddArticleComponent,{
      modal: true,
      width: 'auto'
    });
  }

  public onShowAddCustomer(){
    const ref = this.dialogService.open(DialogAddCustomerComponent,{
      modal: true,
      width: 'auto'
    });
  }

  public onShowAddStore(){
    const ref = this.dialogService.open(DialogAddStoreComponent,{
      modal: true,
      width: 'auto'
    });
  }

  public onShowAddStoreArticle(){
    const ref = this.dialogService.open(DialogAddStoreArticleComponent,{
      modal: true,
      width: 'auto'
    });
  }

}
