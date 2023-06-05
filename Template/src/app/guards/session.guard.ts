import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SessionGuard implements CanActivate {
  constructor(private serviceCokie: CookieService,
    private router: Router
    ){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const cookie = this.serviceCokie.check('token');
      if(!cookie){
        console.log("tokenvalidate",cookie)
        this.router.navigate(['Public/Login']);
      }
      else{
        return true;
      }
      this.router.navigate(['Public/Login']);
    return false;
  }

}
