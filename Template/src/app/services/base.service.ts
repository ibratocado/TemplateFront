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

  get(url: string): Promise<any>{

    let final = `${url}`;
    return lastValueFrom( this.clientHttp.get(this.path + final));
  }

  getPath(url: string, optionsPath: any): Promise<any>{

    let final = `${url}`+`${optionsPath}`;

    return lastValueFrom( this.clientHttp.get(this.path + final));
  }

  getQuery(url: string,optionsQuerry: any): Promise<any>{

    let final = `${url}`;

    return lastValueFrom( this.clientHttp.get(this.path + final,{params: optionsQuerry}));
  }

  postBody(url: string,required: any): Promise<any>{
    return lastValueFrom( this.clientHttp.post(this.path + url,required));
  }

  postParams(url: string,required: any): Promise<any>{
    return lastValueFrom( this.clientHttp.post(this.path + url,required,{params: required}));
  }

  putBody(url: string,required: any): Promise<any>{
    return lastValueFrom( this.clientHttp.put(this.path + url,required));
  }

  putParams(url: string,required: any): Promise<any>{
    return lastValueFrom( this.clientHttp.put(this.path + url,required,{params: required}));
  }

  delete(url: string,optionsPath: any): Promise<any>{
    let final = `${url}${optionsPath}`;
    return lastValueFrom( this.clientHttp.delete(this.path + final));
  }

}
