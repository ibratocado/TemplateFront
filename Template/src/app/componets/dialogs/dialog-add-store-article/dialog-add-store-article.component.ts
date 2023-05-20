import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IArticle, IStoreArticle, IStoreArticleAdd } from 'src/app/interfaces/articles';
import { IGenericPaginatorRequestN } from 'src/app/interfaces/generic';
import { IStore } from 'src/app/interfaces/store';
import { ArticlesService } from 'src/app/services/articles.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-dialog-add-store-article',
  templateUrl: './dialog-add-store-article.component.html',
  styleUrls: ['./dialog-add-store-article.component.scss']
})
export class DialogAddStoreArticleComponent implements OnInit {

  private stores: IStore[] = [];
  private selectStore?: IStore;
  public storeName: string = "";
  public filteredStores: IStore[] = [];


  private articles: IArticle[] = [];
  private selectArticle?: IArticle;
  public articleName: string = "";
  public filteredArticles: IArticle[] = [];

  public buttonsEnable: boolean = true;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private storeService: StoreService,
    private messageService: MessageService,
    private articlesService: ArticlesService
  ) { }

  ngOnInit(): void {
    this.loadStores();
    this.loadArticles();
  }

  public loadStores(){

    let paginator: IGenericPaginatorRequestN = {page: 0, recordsByPage: 100};
    this.storeService.getFull(paginator).then(data=>{
      if(data.data.data.length < 0){
        this.messageService.add({severity:"warn",summary:"Advertencia", detail: "No Se Encontraron Resultados"});
        return;
      }

      this.stores = data.data.data;
      this.filteredStores = data.data.data;

    }).catch(()=>{
      this.messageService.add({severity:"error",summary:"Error", detail: "Error de Servicios Intente mas tarde store"});
    });
  }

  public loadArticles(){

    let paginator: IGenericPaginatorRequestN = {page: 0, recordsByPage: 100};
    this.articlesService.getFull(paginator).then(data=>{
      if(data.data.data.length < 0){
        this.messageService.add({severity:"warn",summary:"Advertencia", detail: "No Se Encontraron Resultados"});
        return;
      }

      this.articles = data.data.data;
      this.filteredArticles = data.data.data;

    }).catch(()=>{
      this.messageService.add({severity:"error",summary:"Error", detail: "Error de Servicios Intente mas tarde store"});
    });
  }

  public onFilterStore(event: any){
    let filtered : IStore[] = [];
        let query = event.query;

        for(let i = 0; i < this.stores.length; i++) {
            let store = this.stores[i];
            if (store.branch.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(store);
            }
        }

        this.filteredStores = filtered;
  }

  public onSelectArticle(event: any){
    console.log(event);
    this.selectArticle = event;
  }

  public onFilterArticle(event: any){
    let filtered : IArticle[] = [];
        let query = event.query;

        for(let i = 0; i < this.articles.length; i++) {
            let store = this.articles[i];
            if (store.description.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(store);
            }
        }

        this.filteredArticles = filtered;
  }

  public onSelectStore(event: any){
    console.log(event);
    this.selectStore = event;
  }

  public save(){
    if(!this.selectArticle && !this.selectStore){
      this.messageService.add({severity:"warn",summary:"Advertencia", detail: "Formulario no Valido"});
      return;
    }

    let model: IStoreArticleAdd = {
      store: this.selectStore?.id,
      article: this.selectArticle?.id
    };
    this.articlesService.addStoreArticle(model).then((data)=>{
      this.messageService.add({severity:"success",summary:"Satisfactorio", detail: data.message});
    }).catch(()=>{
      this.messageService.add({severity:"error",summary:"Error", detail: "Error de servicios"});
      this.buttonsEnable = true;});
  }
}
