import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { environment } from 'src/environments/environment';
import { IRespon} from '../interfaces/generic';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private baseService: BaseService) { }

  public postVerify(options: any): Promise<IRespon<string>>{
    let url = environment.urls.account.postForVerify;
    return this.baseService.postBody(url,options);
  }
}
