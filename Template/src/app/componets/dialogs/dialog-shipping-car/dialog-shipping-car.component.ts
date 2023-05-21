import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IArticle, ICustomerArticleAdd, IStoreArticleAdd } from 'src/app/interfaces/articles';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-dialog-shipping-car',
  templateUrl: './dialog-shipping-car.component.html',
  styleUrls: ['./dialog-shipping-car.component.scss'],
  providers: [CookieService]
})
export class DialogShippingCarComponent implements OnInit {
  public car: IArticle[] = [];
  public total: number = 0;
  public buttonsEnable: boolean = true;
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private messageService: MessageService,
    private cookieService: CookieService,
    private articleService: ArticlesService
  ) { }

  ngOnInit(): void {
    let temp = localStorage.getItem('shippinCar');
    if(temp){
      this.car = JSON.parse(temp);
      this.car.map(item=>{
        this.total+= item.price;
      });
    }
  }

  public save(){
    this.buttonsEnable = false;
    const cookie = this.cookieService.get('client').toString();

    if(cookie.length <= 0)
      return;

    let list: string[] = [];
    this.car.map(item=>{
      list.push(item.id);
    });


    let model: ICustomerArticleAdd = {
      cuatomer: cookie,
      articles: list
    }

    this.articleService.addCustomnerArticle(model).then(data=>{
      this.messageService.add({severity:"success",summary:"Satisfactorio", detail: data.message});
      this.ref.close(true);
    }).catch(()=>{
      this.messageService.add({severity:"error",summary:"Error", detail: "Error de servicios"});
      this.buttonsEnable = true;
    });
  }

}
