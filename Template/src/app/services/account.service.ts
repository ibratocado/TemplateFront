import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { environment } from 'src/environments/environment';
import { IGenericRespon, IGenericStructRespon } from '../interfaces/generic';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private baseService: BaseService) { }

  public postVerify(options: any): Promise<IGenericRespon<string>>{
    let url = environment.urls.account.postForVerify;
    return this.baseService.postBody(url,options);
  }
}
