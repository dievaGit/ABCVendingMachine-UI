import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { looseObj } from 'src/app/types';

export interface Product {
  productId: number;
  warehouseId: number;
  productName: string;
  productCategoryId: number;
  price: number;
  stock: number;
}

export interface User {
  pass: string
  role: string
  userId: number
  userName: string
}



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  columnData: string[] = [];
  dataSource: looseObj[] = [];
  isAdmin: boolean = false
  selectedTabIndex: number = 0;
  tabData: string[] = ['products', 'warehouses', 'machines', 'orders']
  tabs: looseObj[] = [
    {
      label: 'Products',
      buttonName: 'New Product',
      disabled: true
    },
    {
      label: 'Warehouses',
      buttonName: 'New Warehouses',
      disabled: true
    },
    {
      label: 'Vending Machines',
      buttonName: 'New Vending Machine',
      disabled: true
    },
    {
      label: 'Orders',
      buttonName: 'New Order',
      disabled: false
    }
  ]

  // @ViewChild(MatTable) table: MatTable<Product>;

  constructor(
    private apiService: ApiService,
    private chng: ChangeDetectorRef,
    private route:Router
  ) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('userData'))
    let userData: User = JSON.parse(localStorage.getItem('userData')!)
    this.isAdmin = Boolean(userData.role === "admin")
    if (this.isAdmin) {
      this.fetchData()
    }
  }

  fetchData() {
    if (this.tabData[this.selectedTabIndex] === 'products') {
      this.columnData = ['productId', 'warehouseId', 'productName', 'productCategoryId', 'price', 'stock'];
      this.apiService.getProductList().subscribe(res => {
        console.log(res)
        this.dataSource = res;
        this.chng.detectChanges()

      })
    }
    else if (this.tabData[this.selectedTabIndex] == "warehouses") {
      console.log('true')
      this.columnData = ['warehouseId', 'warehouseName', 'location'];
      this.apiService.getwarehouseListUrl().subscribe(res => {
        console.log(res)
        this.dataSource = res;
        this.chng.detectChanges()

      })
    }
    else if (this.tabData[this.selectedTabIndex] == 'machines') {
      this.columnData = ['vendingMachineId', 'vendingMachineName', 'location'];
      this.apiService.getmachineListUrl().subscribe(res => {
        console.log(res)
        this.dataSource = res;
        this.chng.detectChanges()

      })
    }
    else if (this.tabData[this.selectedTabIndex] === 'orders') {
      this.columnData = ['orderId', 'vendingMachineId', 'warehouseId', 'totalPrice'];
      this.apiService.getOrderList().subscribe(res => {
        console.log(res)
        this.dataSource = res;
        this.chng.detectChanges()

      })
    }

  }

  openNewForm(button:string){
    switch (button) {
      case 'New Order':
        this.route.navigate(['order'])
        break;
    
      default:
        break;
    }
  }

}
