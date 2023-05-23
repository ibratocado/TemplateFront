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

  getPath(url: string,options: any): Promise<any>{

    let final = `${url}/${options}`;

    return lastValueFrom( this.clientHttp.get(this.path + final));
  }

  getQuery(url: string,options: any): Promise<any>{
    return lastValueFrom( this.clientHttp.get(this.path + url,options));
  }

  postBody(url: string,required: any): Promise<any>{
    return lastValueFrom( this.clientHttp.post(this.path + url,required));
  }

  postParams(url: string,required: any): Promise<any>{
    return lastValueFrom( this.clientHttp.post(this.path + url,{params:required}));
  }

  putBody(url: string,required: any): Promise<any>{
    return lastValueFrom( this.clientHttp.put(this.path + url,required));
  }

  putParams(url: string,required: any): Promise<any>{
    return lastValueFrom( this.clientHttp.put(this.path + url,{params:required}));
  }

  deleteQuery(url: string,options: any): Promise<any>{
    return lastValueFrom( this.clientHttp.delete(this.path + url,options));
  }

  deletePath(url: string,options: any): Promise<any>{
    let final = `${url}/${options}`;
    return lastValueFrom( this.clientHttp.delete(this.path + url));
  }

}
