import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { environment } from 'src/environments/environment';
import { IGenericPaginator, IGenericPaginatorRequestN, IGenericRespon, IGenericStructRespon } from '../interfaces/generic';
import { IStore, IStoreAdd, IStoreUpdate } from '../interfaces/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private readonly urlBase = environment.urls.store.base;
  constructor(
    private baseService: BaseService
  ) { }

  public getFull(paginator: IGenericPaginatorRequestN):
  Promise<
    IGenericStructRespon<
    IGenericPaginator<
    IStore[]>>>{
    let url = this.urlBase + environment.urls.store.getFull;
    return this.baseService.getQuery(url,paginator);
  }

  public add(model: IStoreAdd): Promise<IGenericStructRespon<any>>{
    return this.baseService.postBody(this.urlBase,model);
  }

  public update(model: IStoreUpdate): Promise<IGenericStructRespon<any>>{
    return this.baseService.putBody(this.urlBase,model);
  }

  public delete(id: string): Promise<IGenericStructRespon<any>>{
    return this.baseService.delete(this.urlBase,id);
  }
}
