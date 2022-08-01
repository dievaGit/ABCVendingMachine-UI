import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { looseObj } from 'src/app/types';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  @Input() columnData: string[] = []
  @Input() data: looseObj[] = []
  @Input() selectedTabIndex: number = 0

  defaultTypes: string[] = ['warehouseId', 'vendingMachineId']

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(type: string, id: number) {
    if (this.selectedTabIndex != 0 && this.selectedTabIndex != 3) {
      this.router.navigate([type, id])
    }
  }

}
