import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IArticle, IArticleAdd, IArticleUpdate } from 'src/app/interfaces/articles';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-dialog-update-article',
  templateUrl: './dialog-update-article.component.html',
  styleUrls: ['./dialog-update-article.component.scss']
})
export class DialogUpdateArticleComponent implements OnInit {
  @ViewChild('fileUpload', {static: false}) fileUpload: any;

  public form: FormGroup = new FormGroup({
    id: new FormControl('',[Validators.required]),
    code: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    price: new FormControl('',[Validators.required]),
    image: new FormControl('',[Validators.required]),
    stock: new FormControl('',[Validators.required])
  });

  private article?: IArticle;

  private file: any;
  public fileName: string = "";
  public buttonsEnable: boolean = true;
  private closes: number = 1;
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private messageService: MessageService,
    private articleService: ArticlesService
  ) { }

  ngOnInit(): void {
    this.article = this.config.data;
    this.setForm();
  }

  private setForm(){
    if(!this.article)
      return;

    this.form.patchValue(this.article);
    this.fileName = this.article.image.split("/")[2];
    console.log(this.fileName);

  }

  public onUploadImage(event: any){
    for(let file of event.files) {
      console.log(file);
      this.file = file;
      this.form.controls["image"].setValue(file.name);
      this.fileName = file.name;
    }
    this.fileUpload.clear();
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

    let model: IArticleUpdate = {
      id: this.form.controls["id"].value.toString(),
      code: this.form.controls["code"].value.toString(),
      description: this.form.controls["description"].value.toString(),
      price: Number(this.form.controls["price"].value),
      stock: Number(this.form.controls["stock"].value),
      image: this.file
    };
    console.log(model);
    this.articleService.updateArticle(model).then(data=>{
      console.log(data.data);
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
