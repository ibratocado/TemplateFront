import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { IGenericPaginator, IGenericPaginatorParameterRequest, IGenericRespon } from '../interfaces/generic';
import { IUserAdd, IUserRespon, IUserUpdate } from '../interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly path = environment.urls.users.base;

  constructor(private baseService: BaseService) { }

  public getPaginator(paginator: IGenericPaginatorParameterRequest<string>): Promise<IGenericRespon<IGenericPaginator<IUserRespon[]>>>{
    let pathFinal = this.path + environment.urls.users.getPaginator;
    return this.baseService.getQuery(pathFinal,paginator);
  }

  public getById(id: string): Promise<IGenericRespon<IUserRespon>>{
    let pathFinal = this.path + environment.urls.users.getByID;
    return this.baseService.getPath(pathFinal,id);
  }

  public add(model: IUserAdd): Promise<IGenericRespon<any>>{
    return this.baseService.postBody(this.path,model);
  }

  public update(model: IUserUpdate): Promise<IGenericRespon<any>>{
    return this.baseService.putBody(this.path,model);
  }

  public deleteLogic(id: string): Promise<IGenericRespon<any>>{
    let pathFinal = this.path + environment.urls.users.deleteLogic;
    return this.baseService.deletePath(pathFinal,id);
  }
}
