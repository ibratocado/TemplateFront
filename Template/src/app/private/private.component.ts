import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log("tamos en el private")
  }

  public onShowForm(){
    this.router.navigate(['/Template/Form']);
  }

  public onShowList(){
    this.router.navigate(['/Template/List']);
  }

  public onShowTable(){
    this.router.navigate(['/Template/Table']);
  }
}

