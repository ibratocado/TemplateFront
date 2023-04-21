import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
import { IAccountRequest } from 'src/app/interfaces/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {

  public progress = false;
  public formCount: FormGroup = new FormGroup({
    count: new FormControl('',[Validators.required,Validators.minLength(5)]),
    pount: new FormControl('',[Validators.required,Validators.minLength(8)])
  });
  constructor(private cookieService: CookieService,
    private route: Router,
    private messageService: MessageService,
    private accountService: AccountService) { }

  ngOnInit(): void {
  }

  public accountVerify(){
    if(!this.formCount.valid){
      this.messageService.add({severity:'warn', summary: 'Importante', detail: 'Contraseña o Usuario no Valido'});
      return;
    }

    let model: IAccountRequest = {
      account: this.formCount.controls['count'].value,
      pount: this.formCount.controls['pount'].value
    }

    this.accountService.postVerify(model)
    .then(data=>{
      this.messageService.add({severity: "success", summary: "Satisfactorio", detail: data.respon.message});
      this.asiignation(data.respon.data);
    }
      )
    .catch(err=>
      this.messageService.add({severity: "error", summary: "Error", detail: "Error Conecction"})
      );
  }

  public validFormDataControl(prop: string){
    var valid = this.formCount.controls[prop].valid
    return !valid;
  }

  private asiignation(data: string){

    if(data)
    {
      let helper = new JwtHelperService();
      let decode = helper.decodeToken(data);
      console.log(decode);

      this.cookieService.set('token', data);
      this.cookieService.set('role',decode.Role);
      this.cookieService.set('count',decode.nameid);
      //this.route.navigate(['/Log']);
    }
  }

}
