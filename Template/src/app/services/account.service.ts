import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { environment } from 'src/environments/environment';
import { IGenericRespon, IRespon} from '../interfaces/generic';
import { IRolRespon } from '../interfaces/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private baseService: BaseService) { }

  public postVerify(options: any): Promise<IRespon<string>>{
    let url = environment.urls.account.postForVerify;
    return this.baseService.postBody(url,options);
  }

  public getRols(): Promise<IGenericRespon<IRolRespon[]>>{
    let url = environment.urls.rols.base;
    return this.baseService.getQuery(url,null);
  }
}
