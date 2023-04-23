import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { IGenericBody, IGenericPaginator, IGenericPaginatorRequest, IGenericRespon } from '../interfaces/generic';
import { environment } from 'src/environments/environment';
import { IArticleAddResquest, IArticleRespon } from '../interfaces/article';
import { HttpParams } from '@angular/common/http';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(private baseService: BaseService) { }

  public get(option: IGenericPaginatorRequest): Promise<IGenericRespon<IGenericPaginator<IArticleRespon[]>>>{
    let url = environment.urls.artilcles.getFullByPage;

    return this.baseService.get(url,option);
  }

  public add(options: IArticleAddResquest): Promise<IGenericRespon<any>>{
    let url = environment.urls.artilcles.add;

    return this.baseService.post(url,options);
  }

  public update(options: IArticleRespon): Promise<IGenericRespon<any>>{
    let url = environment.urls.artilcles.update;

    return this.baseService.put(url,options);
  }

  public delete(options: string): Promise<IGenericRespon<any>>{
    let url = environment.urls.artilcles.delete;

    return this.baseService.delete(url,options);
  }
}
