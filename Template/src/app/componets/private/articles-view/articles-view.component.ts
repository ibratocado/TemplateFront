import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { IArticle, IStoreArticle } from 'src/app/interfaces/articles';
import { IGenericPaginator, IGenericPaginatorRequest, IGenericPaginatorRequestN } from 'src/app/interfaces/generic';
import { IStore } from 'src/app/interfaces/store';
import { ArticlesService } from 'src/app/services/articles.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-articles-view',
  templateUrl: './articles-view.component.html',
  styleUrls: ['./articles-view.component.scss']
})
export class ArticlesViewComponent implements OnInit {

  public products: IStoreArticle[] = [];
  public stores: IStore[] = [];
  public filteredStores: IStore[] = [];
  public storeSelected: IStore | undefined;
  public storeName: string = "";
  public proggres: boolean = true;
  public totalRecords: number = 0;
  private page: number = 0;
  private recordsByPage: number = 9;

  constructor(
    private articleService: ArticlesService,
    private storeService: StoreService,
    private messageService: MessageService) { }


  ngOnInit(): void {
    this.loadStores();
  }

  public loadStores(){

    let paginator: IGenericPaginatorRequestN = {page: 0, recordsByPage: 100};
    this.storeService.getFull(paginator).then(data=>{
      if(data.data.data.length < 0){
        this.messageService.add({severity:"warn",summary:"Advertencia", detail: "No Se Encontraron Resultados"});
        return;
      }

      this.stores = data.data.data;
      this.storeSelected = this.stores[0];
      this.storeName = this.storeSelected.branch;
      this.filteredStores = data.data.data;

    }).catch(()=>{
      this.messageService.add({severity:"error",summary:"Error", detail: "Error de Servicios Intente mas tarde store"});
    });
  }

  public loadArticles(event?: any){

    if(!this.storeSelected){
      this.messageService.add({severity:"error",summary:"Error", detail: "Seleccione una tienda para ver sus productos"});
      this.proggres = false;
      return;
    }


    this.proggres = true;
    this.page = 0;
    this.recordsByPage = 9;

    if(event && event.first){
      this.page = event.first;
      this.recordsByPage = event.rows;
    }

    let paginator: IGenericPaginatorRequest = {id: this.storeSelected?.id, page: this.page, recordsByPage: this.recordsByPage};

    this.articleService.getForIdStore(paginator).then(data=> {

      this.products = data.data.data;
      this.totalRecords = data.data.totalRecords;

      setTimeout(()=>{
        this.proggres = false;
      },1000);

    }).catch(()=>{
      this.messageService.add({severity:"error",summary:"Error", detail: "Error de Servicios Intente mas tarde articlesStore"});
      setTimeout(() => {
        this.proggres = false;
      }, 1000);
    });
  }

  public filterStore(event: any){
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

  public selectStore(event: any){
    console.log(event);
    this.storeSelected = event;
    this.loadArticles();
  }

}
