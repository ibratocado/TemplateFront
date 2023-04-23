import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IArticleAddResquest, IArticleRespon } from 'src/app/interfaces/article';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public progress = false;
  public subhead = "Coloque los Datos de Articulo"
  public modify = false;
  public modelUpdate: IArticleRespon = {id: "", name:"", price: 0};

  public formData: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(4)]),
    price: new FormControl('',[Validators.required,Validators.min(2),Validators.max(1000)]),
  });

  constructor(
    private messageService: MessageService,
    private articleService: ArticuloService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,) { }

  ngOnInit(): void {
    this.setForm();
  }

  private setForm(){

    if(!this.config.data)
      return;

    this.modify = this.config.data.mody;
    this.subhead = this.config.data.subHead;

    this.modelUpdate = {
      id: this.config.data.val.id,
      name: this.config.data.val.name,
      price: this.config.data.val.price
    }

    this.formData.controls['name'].setValue(this.modelUpdate.name);
    this.formData.controls['price'].setValue(this.modelUpdate.price);

  }

  public addArticle(){

    if(!this.formData.valid)
    {
      this.messageService.add({severity:"warn",summary:"Warning",detail:"Formulario no valido"});
      return;
    }
    this.progress = true; this.progress = true;

    let model: IArticleAddResquest = {
      name: this.formData.controls['name'].value,
      price: this.formData.controls['price'].value
    }
    this.articleService.add(model).then(data=>{
      this.messageService.add({severity: "success", summary:"Satisfactorio", detail: data.respon.message});
      this.progress = false;
    }).catch(err=>{
      this.messageService.add({severity: "error", summary:"Error", detail: "Error del Servicio Intente mas Tarde"});
      this.progress = false;
    });
  }

  public updateArticle(){

    if(!this.formData.valid && this.formData.dirty)
    {
      this.messageService.add({severity:"warn",summary:"Warning",detail:"Formulario no valido"});
      return;
    }
    this.progress = true; this.progress = true;

    let model: IArticleAddResquest = {
      name: this.formData.controls['name'].value,
      price: this.formData.controls['price'].value
    }
    this.articleService.add(model).then(data=>{
      this.messageService.add({severity: "success", summary:"Satisfactorio", detail: data.respon.message});
      this.progress = false;
      this.ref.close(2);
    }).catch(err=>{
      this.messageService.add({severity: "error", summary:"Error", detail: "Error del Servicio Intente mas Tarde"});
      this.progress = false;
    });
  }

  public validFormDataControl(control: string){
    return this.formData.controls[control].valid;
  }

}
