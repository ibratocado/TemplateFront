import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { IRolRespon } from 'src/app/interfaces/account';
import { IUserAdd } from 'src/app/interfaces/user';
import { AccountService } from 'src/app/services/account.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {

  public selectedRol:string = "";
  public rolList: IRolRespon[] = [];
  public filteredRols: IRolRespon[] = [];
  public disableButton: boolean = false;
  public formUser = new FormGroup(
    {
      roleId: new FormControl("",[Validators.required,Validators.min(1)]),
      curp: new FormControl("",[Validators.required,Validators.minLength(18),Validators.maxLength(18)]),
      lastName:new FormControl("",[Validators.required]),
      secondLastName: new FormControl("",[Validators.required]),
      name: new FormControl("",[Validators.required]),
      salary: new FormControl("",[Validators.required,Validators.min(1000)]),
      phone: new FormControl("",[Validators.required,Validators.minLength(10)]),
      account: new FormControl("",[Validators.required]),
      pount: new FormControl("",[Validators.required,Validators.minLength(5)]),
    }
  );
  constructor(
    private rolsService: AccountService,
    private userService: UsersService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.loadRols();
  }

  private loadRols(){
    this.rolsService.getRols()
    .then(data=>{
      this.rolList = data.data;
    })
    .catch(err=>{
      this.messageService.add({severity: "error", summary: "Error", detail: err.message});
    });
  }


  public onAdd(){
    if(!this.formUser.valid){
      this.messageService.add({severity: "warn", summary: "Advertencia", detail: "Formulario Incorrecto"});
      return;
    }

    this.disableButton = true;

    let model: IUserAdd = {
      roleId: this.formUser.controls["roleId"].value,
      curp: this.formUser.controls["curp"].value,
      lastName: this.formUser.controls["lastName"].value,
      secondLastName: this.formUser.controls["secondLastName"].value,
      name: this.formUser.controls["name"].value,
      salary: this.formUser.controls["salary"].value,
      phone: this.formUser.controls["phone"].value,
      account: this.formUser.controls["account"].value,
      pount: this.formUser.controls["pount"].value,
    }

    this.userService.add(model)
    .then(data=>{
      this.messageService.add({severity: "success", summary: "Satisfactorio", detail: data.message});
      this.disableButton = false;
      this.formUser.reset();
    })
    .catch(err=>{
      this.messageService.add({severity: "error", summary: "Error", detail: err.message});
      this.disableButton = false;
    });
  }

  public filterRol(event: any){
    let filtered : IRolRespon[] = [];
        let query = event.query;

        for(let i = 0; i < this.rolList.length; i++) {
            let rol = this.rolList[i];
            if (rol.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(rol);
            }
        }
        this.filteredRols = filtered;
  }

  public onSelectRol(event: any){
    console.log("Event rol",event);
    this.formUser.controls['roleId'].setValue(event.id);
  }

  public validFormDataControl(name: string): boolean{
    var valid = this.formUser.controls[name].valid;
    return !valid;
  }
}
