import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public list = [];
  public loading: boolean = true;
  public listSelected = [];
  public selectAll: boolean = false;
  public page: number = 0;
  public totalRecords: number = 0;
  public recordsByPage: number = 10;

  constructor() { }

  ngOnInit(): void {
    console.log("tamos en el table")
  }

  public load(event: LazyLoadEvent){

  }

  public onSelectionChange(event = []){
    this.selectAll = event.length === this.totalRecords;
        this.listSelected = event;
  }

  public onSelectionAllChange(event: any){
    const checked = event.checked;

    if(checked){
      this.listSelected = this.listSelected;
      this.selectAll = true;
    }

    else{
      this.listSelected = [];
      this.selectAll = false;
    }

  }


}
