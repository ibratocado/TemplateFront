import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IStore, IStoreUpdate } from 'src/app/interfaces/store';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-dialog-update-store',
  templateUrl: './dialog-update-store.component.html',
  styleUrls: ['./dialog-update-store.component.scss']
})
export class DialogUpdateStoreComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    id: new FormControl('',[Validators.required]),
    branch: new FormControl('',[Validators.required]),
    addres: new FormControl('',[Validators.required]),
  });
  public buttonsEnable: boolean = true;
  private closes: number = 1;

  private store?: IStore;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private messageService: MessageService,
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.store = this.config.data;
    if(this.store)
      this.form.patchValue(this.store);
  }

  public validFormDataControl(control: string){
    return this.form.controls[control].valid;
  }

  public save(){
    this.buttonsEnable = false;
    if(!this.form.valid){
      this.messageService.add({severity:"warn",summary:"Advertencia", detail: "Formulario no Valido"});
      this.buttonsEnable = true;
      return;
    }

    let model: IStoreUpdate = {
      id: this.form.controls["id"].value.toString(),
      branch: this.form.controls["branch"].value.toString(),
      addres: this.form.controls["addres"].value.toString(),
    };
    this.storeService.update(model).then(data=>{
      this.messageService.add({severity:"success",summary:"Satisfactorio", detail: data.message});
      this.buttonsEnable = true;
      this.form.reset();
      this.closes = 2;
    }).catch(()=>{
      this.messageService.add({severity:"error",summary:"Error", detail: "Error de servicios"});
      this.buttonsEnable = true;
    });
  }

  public onClose(){
    this.ref.close(this.closes);
  }
}
