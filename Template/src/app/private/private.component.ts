import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  public count = "";
  constructor(
    private router: Router,
    private serviceCokie: CookieService
  ) { }

  ngOnInit(): void {
    this.count = this.serviceCokie.get('count');
    console.log(this.serviceCokie.get('count'))
  }

  public onShowForm(){
    this.router.navigate(['/Private/Users/Add']);
  }

  public onShowList(){
    this.router.navigate(['/Private/Template/List']);
  }

  public onShowTable(){
    this.router.navigate(['/Private/Users/Table']);
  }
}

