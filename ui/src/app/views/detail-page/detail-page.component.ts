import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

export interface PeriodicElement {
  productName: string;
  category: number;
  price: number;
  stock: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    productName: 'test',
    category: 3,
    price: 4,
    stock: 5
  }
];
@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent {
  displayedColumns: string[] = ['productName', 'category', 'price', 'stock'];
  dataSource = [...ELEMENT_DATA];
  @ViewChild(MatTable) table: MatTable<PeriodicElement>;
  

}
