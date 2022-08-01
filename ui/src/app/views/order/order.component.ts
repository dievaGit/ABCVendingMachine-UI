import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { item, looseObj, newOrderForm } from 'src/app/types';

interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})

export class OrderComponent implements OnInit {
  formValues = {
    vendingMachineId: 0,
    warehouseId: 0,
    items: []
  }
  quantityArr: any = []
  vendingMachineData: looseObj[] = []
  warehouseData: looseObj[] = []
  productData: looseObj[] = []
  selectedVM: any;
  displayedColumns: string[] = ['productName', 'quantity', 'price'];
  orderBody: newOrderForm;
  filteredBody: item[];
  isButtonDisable: boolean = true

  getTotalCost() {
    let totalPrice = 0;
    this.formValues.items.forEach((i: any) => {
      totalPrice += this.getQuantity(i) * i.price
    })
    return totalPrice
  }

  constructor(
    private apiServices: ApiService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.apiServices.getmachineListUrl().subscribe(res => this.vendingMachineData = res)
    this.apiServices.getwarehouseListUrl().subscribe(res => this.warehouseData = res)

  }

  selectingQty(event: Event) {
    event.stopPropagation()
  }
  
  changingVM(){
    this.isButtonDisable = !(this.formValues.items.length > 0 && this.formValues.vendingMachineId > 0)

  }

  changingWareHouse(ev: any) {
    this.formValues.items = []
    this.apiServices.getAllProductByWareHouseId(ev.value).subscribe(res => {
      res.map(e => e.quantity = 0)
      this.productData = res
    })
    this.isButtonDisable = !(this.formValues.items.length > 0 && this.formValues.vendingMachineId > 0)
  }

  createOrder() {
    this.formValues.items.map((e: any) => {
      let quantityObj = this.quantityArr.find((q: any) => q.productWarehouseId == e.productWarehouseId)
      if (quantityObj) {
        e.quantity = parseInt(quantityObj.quantity)
      }
      e.productPrice = e.price
    })

    this.filteredBody = this.formValues.items.map(({ productId, quantity, productPrice }) => ({ productId, quantity, productPrice }))

    this.orderBody = {
      warehouseId: this.formValues.warehouseId,
      vendingMachineId: this.formValues.vendingMachineId,
      items: this.filteredBody
    }
    this.apiServices.createOrder(this.orderBody).subscribe(res => {
      this.apiServices.getProductList();
      this.route.navigate(['dashboard']).then(() => {
        window.location.reload()
      })
    })
  }

  changingQty(event: any, index: number, p: any) {
    event.stopPropagation()
    let quantityObj = this.quantityArr.find((e: any) => e.productWarehouseId == p.productWarehouseId)
    let objIndex = this.quantityArr.findIndex((e: any) => e.productWarehouseId == p.productWarehouseId)
    if (quantityObj) {
      this.quantityArr[objIndex]['quantity'] = event.target.value
    } else {
      this.quantityArr.push({ productWarehouseId: p.productWarehouseId, quantity: event.target.value })
    }
    this.isButtonDisable = !(this.formValues.items.length > 0 && this.formValues.vendingMachineId > 0)    
  }

  getQuantity(obj: any) {
    let quantityObj = this.quantityArr.find((q: any) => q.productWarehouseId == obj.productWarehouseId)
    return quantityObj ? quantityObj.quantity : 0
  }

  cancelOrder() {
    this.route.navigate(['dashboard']).then(() => {
      window.location.reload()
    })
  }
}
