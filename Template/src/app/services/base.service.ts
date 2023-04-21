import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private path = environment.urls.urlApi;
  constructor(private clientHttp: HttpClient) { }

  get(url: string,optionsQuerry: any, optionsPath?: any): Promise<any>{

    let final = `${url}/${optionsPath}`;

    if(!optionsPath)
      final = `${url}`;

    return lastValueFrom( this.clientHttp.get(this.path + final,optionsQuerry));
  }

  post(url: string,required: any): Promise<any>{
    return lastValueFrom( this.clientHttp.post(this.path + url,required));
  }

  put(url: string,required: any): Promise<any>{
    return lastValueFrom( this.clientHttp.put(this.path + url,required));
  }

  delete(url: string): Promise<any>{
    return lastValueFrom( this.clientHttp.delete(this.path + url));
  }

}
