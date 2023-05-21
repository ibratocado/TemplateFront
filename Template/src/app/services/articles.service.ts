import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { IGenericPaginator, IGenericPaginatorRequest, IGenericPaginatorRequestN, IGenericStructRespon} from '../interfaces/generic';
import { IArticle, IArticleAdd, IArticleUpdate, ICustomerArticle, ICustomerArticleAdd, IStoreArticle, IStoreArticleAdd, IStoreArticleUpdate } from '../interfaces/articles';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(

    private baseService: BaseService) {
  }

  private urlbase = environment.urls.storeArticle.base;
  private urlArticle = environment.urls.article.base;
  private urlCustomer = environment.urls.customerArticle.base;
  public getForIdStore(paginator: IGenericPaginatorRequest):
  Promise<
    IGenericStructRespon<
    IGenericPaginator<
    IStoreArticle[]>>>
  {
    let url = this.urlbase + environment.urls.storeArticle.getByIdStore;
    return this.baseService.getQuery(url,paginator);
  }

  public getFull(paginator: IGenericPaginatorRequestN):
  Promise<
    IGenericStructRespon<
    IGenericPaginator<
    IArticle[]>>>{
    let url = this.urlArticle + environment.urls.article.getFull;
    return this.baseService.getQuery(url,paginator);
  }

  public getOneById(id: string): Promise<IGenericStructRespon<IArticle>>{
    let url = this.urlbase + environment.urls.article.getOneById;
    return this.baseService.getPath(url,id);
  }

  public addArticle(model: IArticleAdd): Promise<IGenericStructRespon<any>>{
    let fromData = new FormData();
    fromData.append('Code',model.code);
    fromData.append('Description',model.description);
    fromData.append('Price',model.price.toString());
    fromData.append('Stock',model.stock.toString());
    fromData.append('Image',model.image);

    return this.baseService.postParams(this.urlArticle,fromData);
  }

  public updateArticle(model: IArticleUpdate): Promise<IGenericStructRespon<any>>{
    let fromData = new FormData();
    fromData.append('Id',model.id);
    fromData.append('Code',model.code);
    fromData.append('Description',model.description);
    fromData.append('Price',model.price.toString());
    fromData.append('Stock',model.stock.toString());
    fromData.append('Image',model.image);
    return this.baseService.putParams(this.urlArticle,fromData);
  }

  public delete(id: string): Promise<IGenericStructRespon<any>>{
    return this.baseService.delete(this.urlArticle,id);
  }

  public addStoreArticle(model: IStoreArticleAdd): Promise<IGenericStructRespon<any>>{
    return this.baseService.postBody(this.urlbase,model);
  }

  public updateStoreArticle(model: IStoreArticleUpdate): Promise<IGenericStructRespon<any>>{
    return this.baseService.putBody(this.urlbase,model);
  }

  public addCustomnerArticle(model: ICustomerArticleAdd): Promise<IGenericStructRespon<any>>{
    return this.baseService.postBody(this.urlCustomer,model);
  }

  public updateCustomerArticle(model: IStoreArticleUpdate): Promise<IGenericStructRespon<any>>{
    return this.baseService.putBody(this.urlCustomer,model);
  }

  public getArticlesByCustomer(id: string): Promise<IGenericStructRespon<ICustomerArticle[]>>{
    let url = this.urlCustomer + environment.urls.customerArticle.getByIdCustomer;
    return this.baseService.getPath(url,id);
  }

}
