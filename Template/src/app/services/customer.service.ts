import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';
import { IGenericPaginator, IGenericPaginatorRequestN, IGenericStructRespon } from '../interfaces/generic';
import { ICustomer, ICustomerAdd, ICustomerUpdate } from '../interfaces/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private readonly urlBase = environment.urls.customer.base;
  constructor(
    private baseService: BaseService
  ) { }

  public getFull(paginator: IGenericPaginatorRequestN):
  Promise<
    IGenericStructRespon<
    IGenericPaginator<
    ICustomer[]>>>{
    let url = this.urlBase + environment.urls.store.getFull;
    return this.baseService.getQuery(url,paginator);
  }

  public add(model: ICustomerAdd): Promise<IGenericStructRespon<any>>{
    return this.baseService.postBody(this.urlBase,model);
  }

  public update(model: ICustomerUpdate): Promise<IGenericStructRespon<any>>{
    return this.baseService.putBody(this.urlBase,model);
  }

  public delete(id: string): Promise<IGenericStructRespon<any>>{
    return this.baseService.delete(this.urlBase,id);
  }
}
