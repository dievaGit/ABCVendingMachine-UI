import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { looseObj } from 'src/app/types';

export interface Product {
  productName: string;
  category: number;
  price: number;
  stock: number;
}
@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  columnData: string[] = ['productName', 'productCategoryId', 'price', 'stock'];
  dataSource: looseObj[] = [];
  type: string = '';
  id: number = 0;

  @ViewChild(MatTable) table: MatTable<Product>;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get('id')!)
      this.type = params.get('type')!
    })

    switch (this.type) {
      case 'warehouseId':
        this.apiService.getAllProductByWareHouseId(this.id).subscribe(res => {
          this.dataSource = res
        })
        break;
      case 'vendingMachineId':
        this.apiService.getAllProductsByMachineId(this.id).subscribe(res => {
          this.dataSource = res
        })
        break;
      default:
        //for default
        this.dataSource = []
        break;
    }



  }

}
