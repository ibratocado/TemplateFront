import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IStore, IStoreAdd } from 'src/app/interfaces/store';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-dialog-add-store',
  templateUrl: './dialog-add-store.component.html',
  styleUrls: ['./dialog-add-store.component.scss']
})
export class DialogAddStoreComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    branch: new FormControl('',[Validators.required]),
    addres: new FormControl('',[Validators.required]),
  });
  public buttonsEnable: boolean = true;
  private closes: number = 1;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private messageService: MessageService,
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
  }

  public validFormDataControl(control: string){
    console.log("fomrValid",this.form.controls[control].valid);
    return this.form.controls[control].valid;
  }

  public save(){
    this.buttonsEnable = false;
    if(!this.form.valid){
      this.messageService.add({severity:"warn",summary:"Advertencia", detail: "Formulario no Valido"});
      this.buttonsEnable = true;
      return;
    }

    let model: IStoreAdd = {
      branch: this.form.controls["branch"].value.toString(),
      addres: this.form.controls["addres"].value.toString(),
    };
    console.log(model);
    this.storeService.add(model).then(data=>{
      console.log(data.data);
      this.messageService.add({severity:"success",summary:"Satisfactorio", detail: data.message});
      this.buttonsEnable = true;
      this.form.reset();
      this.closes = 2;
      this.ref.close(this.closes);
    }).catch(()=>{
      this.messageService.add({severity:"error",summary:"Error", detail: "Error de servicios"});
      this.buttonsEnable = true;
    });
  }

  public onClose(){
    this.ref.close(this.closes);
  }

}
