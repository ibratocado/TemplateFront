import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { IArticleRespon } from 'src/app/interfaces/article';
import { IGenericPaginatorRequest } from 'src/app/interfaces/generic';
import { ArticuloService } from 'src/app/services/articulo.service';
import { FormComponent } from '../form/form.component';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  public listData: IArticleRespon[] = [];
  public selectedData: IArticleRespon[] = [];
  public selectAll: boolean = false;
  public loadingTable: boolean = true;
  public totalRecords: number = 0;
  public totalPages: number = 5;
  public recordsByPage: number = 2;
  private page: number = 1;

  constructor(
    private articleService: ArticuloService,
    private messageService: MessageService,
    private dialogService: DialogService) { }

  ngOnInit(): void {
  }

  public loadData(event?: any ){

    this.loadingTable = true;

    if(event && event.first >= 0){
      let pages: number = event.first;
      this.page = pages/this.recordsByPage + 1;
    }


    let options: IGenericPaginatorRequest = {page:this.page,records:this.recordsByPage};
    this.articleService.get(options).then(data => {

      this.listData = data.respon.data.data;
      this.totalRecords = data.respon.data.totalRecords;
      this.totalPages = data.respon.data.totalPages;
      if(this.totalPages > 5)
      {
        this.totalPages = 5;
      }
      setTimeout(() => {
        this.loadingTable = false;
      }, 1000);
    }).catch(error =>{
      setTimeout(() => {
        this.messageService.add({severity:"error",summary:"Error", detail: "Error de Servicios Intente mas tarde"});
        this.loadingTable = false;
      }, 1000);
    });
  }

  public validateLengthValues(){
    let value = this.selectedData.length >= 3;
    if(value){

      this.messageService.add({severity:"success",summary:"Correcto", detail:"Selección correcta"});
      this.selectedData.forEach(item=>{
        this.deleteOne(item.id);
      });
      return ;
    }
    this.messageService.add({severity:"warn",summary:"Warning", detail:"Debe seleccionar al menos 3 artículos"});
    return ;
  }

  public onSelectionChange(value = []){
    this.selectedData = value;
    this.selectAll = value.length === (this.totalRecords || this.recordsByPage);
    console.log(this.selectedData);
  }

  public onSelectAllChange(event: any){
    const checked = event.checked;
    if (checked) {
      this.selectedData = this.listData;
      this.selectAll = true;
    }
    else {
      this.selectedData = [];
      this.selectAll = false;
    }
  }

  public showAdd(){
    const ref = this.dialogService.open(FormComponent,{
      header: 'Agregar Articulo',
      modal: true,
      width: '640px'
    });

    ref.onClose.subscribe((data)=>{
      if(data)
      {
        this.page = 1;
        this.loadData();
      }
    });
  }

  public showDetails(value: IArticleRespon){
    const ref = this.dialogService.open(FormComponent,{
      header: 'Actualizar Articulo',
      modal: true,
      data: {val:value,mody:true,subHead:"Modifique el Articulo"},
      width: '640px'
    });

    ref.onClose.subscribe((data)=>{

      if(data)
      {
        this.page = 1;
        this.loadData();
      }
    });
  }

  public deleteOne(key: string){
    this.articleService.delete(key).then(data=>{
      this.loadData();
      this.messageService.add({severity:"success",summary:"Satisfactorio", detail: data.respon.message});
    }).catch(()=>
      this.messageService.add({severity: "error", summary:"Error", detail: "Error del Servicio Intente mas Tarde"}
    ));
  }

}
