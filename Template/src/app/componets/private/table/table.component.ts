import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public listData: any[] = [];
  public selectedData: any[] = [];
  public selectAll: boolean = false;
  public loadingTable: boolean = false;
  public totalRecords: number = 0;
  public recordsByPage: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public loadData(event: any){

  }

  public onSelectionChange(event: any){
    const checked = event.checked;

        if (checked) {
            this.selectedData.push(event);
            this.selectAll = this.selectedData.length === this.totalRecords;
        }
        else {
            this.selectedData = [];
            this.selectAll = false;
        }
  }

  public onSelectAllChange(value = []){
    this.selectAll = value.length === this.recordsByPage;
    this.selectedData = this.listData;
  }

}
