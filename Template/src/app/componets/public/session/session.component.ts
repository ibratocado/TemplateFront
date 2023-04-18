import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
import { IAccountRequest } from 'src/app/interfaces/account';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {

  public progress = false;
  public formCount: FormGroup = new FormGroup({
    count: new FormControl('',[Validators.required]),
    pount: new FormControl('',[Validators.required,Validators.minLength(8)])
  });
  constructor(private cookieService: CookieService,
    private route: Router,
    private messageService: MessageService) { }

  ngOnInit(): void {
  }

  public accountVerify(){
    if(this.formCount.valid){
      let model: IAccountRequest = {
        count: this.formCount.controls['count'].value,
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
    this.messageService.add({severity:'warn', summary: 'Importante', detail: 'Contraseña o Usuario no Valido'});
  }

  public validFormDataControl(prop: string){
    var valid = this.formCount.controls[prop].valid
    return !valid;
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
