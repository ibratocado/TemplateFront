import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
import { ICustomerArticle } from 'src/app/interfaces/articles';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-customers-article-view',
  templateUrl: './customers-article-view.component.html',
  styleUrls: ['./customers-article-view.component.scss'],
  providers: [CookieService]
})
export class CustomersArticleViewComponent implements OnInit {

  public articlesList: ICustomerArticle[] = [];
  public totalRecords: number = 0;
  public loading: boolean = true;
  public page = 0;
  public recordsByPage = 10;
  constructor(
    private articleService: ArticlesService,
    private cookieService: CookieService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
  }

  public loadArticles(event?: any){

    if(event && event.first){
      this.page = event.first;
      this.recordsByPage = event.rows;
    }

    const cookie = this.cookieService.get('client').toString();
    this.articleService.getArticlesByCustomer(cookie).then(data=> {

      this.articlesList = data.data;
      setTimeout(()=>{
        this.loading = false;
      },1000);

    }).catch(()=>{
      this.messageService.add({severity:"error",summary:"Error", detail: "Error de Servicios Intente mas tarde articlesStore"});
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    });
  }

}
