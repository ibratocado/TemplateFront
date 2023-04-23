import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SessionGuard implements CanActivate, CanDeactivate<unknown> {
  constructor(private serviceCokie: CookieService,
    private router: Router
    ){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const cookie = this.serviceCokie.check('token');
      if(!cookie){
        console.log(cookie)
        this.router.navigate(['/']);
      }
      else{
        return true;
      }
    return false;
  }

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const cookie = this.serviceCokie.check('token');
      console.log("3",cookie)
      if(!cookie){
        this.router.navigate(['/Private']);
      }
      else{
        return true;
      }
    return false;
  }
}
