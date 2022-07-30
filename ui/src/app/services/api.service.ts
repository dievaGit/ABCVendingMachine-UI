import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginForm, looseObj, newOrderForm } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL = 'http://localhost:44077/api';
  private loginUrl = '/user';
  private productListUrl = '/warehouse/products';
  private warehouseListUrl = '/warehouse';
  private machineListUrl = '/vendingMachine';
  private orderListUrl = '/order';

  constructor(private http: HttpClient) { }

  login(data: loginForm) {
    return this.http.post<any>(this.baseURL + this.loginUrl, data)
  }

  getProductList() {
    return this.http.get<looseObj[]>(this.baseURL + this.productListUrl);
  }

  getwarehouseListUrl() {
    console.log('ínside api')
    return this.http.get<looseObj[]>(this.baseURL + this.warehouseListUrl);
  }

  getAllProductByWareHouseID(wareHouseId: number) {
    return this.http.get<looseObj[]>(this.baseURL + this.warehouseListUrl + '/' + wareHouseId);

  }

  getmachineListUrl() {
    return this.http.get<looseObj[]>(this.baseURL + this.machineListUrl);
  }

  getAllProductsByMachineId(machineId: number) {
    return this.http.get<looseObj[]>(this.baseURL + this.machineListUrl + '/' + machineId);
  }

  getOrderList() {
    return this.http.get<looseObj[]>(this.baseURL + this.orderListUrl);
  }

  createOrderList(data: newOrderForm) {
    return this.http.post<any>(this.baseURL + this.orderListUrl, data);
  }

}
