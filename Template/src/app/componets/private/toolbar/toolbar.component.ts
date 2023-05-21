import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { DialogAddArticleComponent } from '../../dialogs/dialog-add-article/dialog-add-article.component';
import { DialogAddStoreComponent } from '../../dialogs/dialog-add-store/dialog-add-store.component';
import { DialogAddStoreArticleComponent } from '../../dialogs/dialog-add-store-article/dialog-add-store-article.component';
import { Router } from '@angular/router';
import { DialogShippingCarComponent } from '../../dialogs/dialog-shipping-car/dialog-shipping-car.component';
import { CookieService } from 'ngx-cookie-service';
import { IArticle } from 'src/app/interfaces/articles';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  providers: [CookieService]
})
export class ToolbarComponent implements OnInit {

  @Input() car: number = 0;
  public client: string = "";
  constructor(private dialogService: DialogService,
    private router: Router,
    private cookieService: CookieService) { }

  ngOnInit(): void {
    this.setCar();
  }

  private setCar(){
    this.client = this.cookieService.get('client').toString();
    let shipping = localStorage.getItem('shippinCar');
    if(shipping){
      let list: IArticle[] = JSON.parse(shipping);
      this.car = list.length;
    }
  }

  public article(){
    this.router.navigate(['/Articles']);
  }

  public articleAdmin(){
    this.router.navigate(['/ArticlesAD']);
  }

  public stores(){
    this.router.navigate(['/Stores']);
  }

  public customers(){
    this.router.navigate(['/Customers']);
  }

  public orders(){
    this.router.navigate(['/Orders']);
  }

  public onShowAddArticle(){
    const ref = this.dialogService.open(DialogAddArticleComponent,{
      modal: true,
      width: 'auto'
    });
  }

  /*public onShowAddCustomer(){
    const ref = this.dialogService.open(DialogAddCustomerComponent,{
      modal: true,
      width: 'auto'
    });
  }*/

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

  public onShowCar(){
    if(this.car <=0 ){
      return;
    }

    const ref = this.dialogService.open(DialogShippingCarComponent,{
      modal: true,
      width: 'auto'
    });

    ref.onClose.subscribe(data=>{
      if(data)
        localStorage.removeItem('shippinCar');
        this.car = 0;
    });
  }

}
