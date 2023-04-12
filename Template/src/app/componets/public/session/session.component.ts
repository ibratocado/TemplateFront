import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {

  public hide = true;
  public formCount: FormGroup = new FormGroup({
    count: new FormControl('',[Validators.required]),
    pount: new FormControl('',[Validators.required])
  });
  constructor(private cookieService: CookieService,
    private route: Router) { }

  ngOnInit(): void {
  }

  public acc(){
    /*if(this.formCount.valid){
      let model: IAccountResquest = {
        account: this.formCount.controls['count'].value,
        pount: this.formCount.controls['pount'].value
      }

      /*this.accService.account(model)
      .then(data=>{
        this.genericService.openSnackBar(data.respon.message,"Valido");
        this.asiignation(data.respon.data);
      }
        )
      .catch(err=> this.genericService.openSnackBar(err.error.respon.message,"Error"));
      return;*/
    }


  private asiignation(dat: any){
    if(dat.token && dat.id)
    {
      this.cookieService.set('token', dat.token);
      this.cookieService.set('role',dat.role+'');
      this.cookieService.set('id',dat.id+'');
      this.cookieService.set('name',dat.name+'');
      this.route.navigate(['/Log']);
    }
  }

}
