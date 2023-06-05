import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { IRolRespon } from 'src/app/interfaces/account';
import { IUserRespon, IUserUpdate } from 'src/app/interfaces/user';
import { AccountService } from 'src/app/services/account.service';
import { UsersService } from 'src/app/services/users.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-users-dialog-update',
  templateUrl: './users-dialog-update.component.html',
  styleUrls: ['./users-dialog-update.component.scss']
})
export class UsersDialogUpdateComponent implements OnInit {

  public selectedRol:string = "";
  public rolList: IRolRespon[] = [];
  public filteredRols: IRolRespon[] = [];
  public disableButton: boolean = false;
  private user?: IUserRespon;
  public formUser = new FormGroup(
    {
      roleId: new FormControl("",[Validators.required,Validators.min(1)]),
      curp: new FormControl("",[Validators.required,Validators.minLength(18),Validators.maxLength(18)]),
      lastName:new FormControl("",[Validators.required]),
      secondLastName: new FormControl("",[Validators.required]),
      name: new FormControl("",[Validators.required]),
      salary: new FormControl("",[Validators.required,Validators.min(1000)]),
      phone: new FormControl("",[Validators.required,Validators.minLength(10)]),
    }
  );
  constructor(
    private rolsService: AccountService,
    private userService: UsersService,
    private messageService: MessageService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
  ) { }

  ngOnInit(): void {
    this.loadRols();
    this.user = this.config.data;
    this.setForm();
  }

  private setForm(){
    if(!this.user)
      return;

    this.formUser.patchValue(this.user);
    this.formUser.controls["curp"].disable();


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
    if(!this.formUser.valid || !this.user){
      this.messageService.add({severity: "warn", summary: "Advertencia", detail: "Formulario Incorrecto"});
      return;
    }

    if(!this.formUser.dirty){
      this.messageService.add({severity: "warn", summary: "Advertencia", detail: "No Se Cambiaron Datos"});
      return;
    }

    this.disableButton = true;

    let model: IUserUpdate = {
      id: this.user?.id,
      roleId: this.formUser.controls["roleId"].value,
      curp: this.formUser.controls["curp"].value,
      lastName: this.formUser.controls["lastName"].value,
      secondLastName: this.formUser.controls["secondLastName"].value,
      name: this.formUser.controls["name"].value,
      salary: this.formUser.controls["salary"].value,
      phone: this.formUser.controls["phone"].value,
    }

    this.userService.update(model)
    .then(data=>{
      this.messageService.add({severity: "success", summary: "Satisfactorio", detail: data.message});
      this.disableButton = false;
      this.formUser.reset();
      this.ref.close(2);
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
