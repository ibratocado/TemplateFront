import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, MessageService } from 'primeng/api';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public list = [];
  public loading: boolean = true;
  public page: number = 0;
  public totalRecords: number = 0;
  public recordsByPage: number = 10;
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  public load(event: LazyLoadEvent){
    this.messageService.add({severity: 'success', summary: 'Satisfactorio', data: 'mensaje'});
  }

}
