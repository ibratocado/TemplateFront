import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { IArticle, IArticleUpdate } from 'src/app/interfaces/articles';
import { IGenericPaginatorRequestN } from 'src/app/interfaces/generic';
import { ArticlesService } from 'src/app/services/articles.service';
import { DialogAddArticleComponent } from '../../dialogs/dialog-add-article/dialog-add-article.component';
import { Subscription } from 'rxjs';
import { DialogUpdateArticleComponent } from '../../dialogs/dialog-update-article/dialog-update-article.component';

@Component({
  selector: 'app-articles-admin-view',
  templateUrl: './articles-admin-view.component.html',
  styleUrls: ['./articles-admin-view.component.scss']
})
export class ArticlesAdminViewComponent implements OnInit, OnDestroy {

  public articlesList: IArticle[] = [];
  public totalRecords: number = 0;
  public loading: boolean = true;
  public page = 0;
  public recordsByPage = 10;
  private subs: Subscription[] = [];

  constructor(
    private articleService: ArticlesService,
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

  public loadArticles(event?: LazyLoadEvent){
    this.loading = true;
    this.page = 0;
    this.recordsByPage = 10;

    if(event && event.first && event.rows){
      this.page = event.first;
      this.recordsByPage = event.rows;
    }

    let paginator: IGenericPaginatorRequestN = {page: this.page, recordsByPage: this.recordsByPage};

    this.articleService.getFull(paginator).then(data=>{
      this.articlesList =  data.data.data;
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

  public onShowAddArticle(){
    const ref = this.dialogService.open(DialogAddArticleComponent,{
      modal: true,
      width: 'auto'
    });

    this.subs.push(
      ref.onClose.subscribe(data=>{
        if(data == 2)
        {
          this.loadArticles();
        }
      })
    );
  }

  public onShowUpdateArticle(model: IArticleUpdate){
    const ref = this.dialogService.open(DialogUpdateArticleComponent,{
      modal: true,
      data: model,
      width: 'auto'
    });

    this.subs.push(
      ref.onClose.subscribe(data=>{
        if(data == 2)
        {
          this.loadArticles();
        }
      })
    );
  }

  public onDeleteArticle(event: any,id: string){
    this.confirmationService.confirm({
      target: event.target,
      message: 'Seguro que quiere borrar esta Tienda?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.articleService.delete(id).then(data=>{
          this.loadArticles();
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
