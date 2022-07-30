import { Component, Input, OnInit } from '@angular/core';
import { looseObj } from 'src/app/types';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  @Input() columnData:string[]=[]
  @Input() data:looseObj[]=[]


  constructor() { }

  ngOnInit(): void {
  }

}
