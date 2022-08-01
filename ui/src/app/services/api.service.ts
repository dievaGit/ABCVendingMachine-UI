import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginForm, looseObj, newOrderForm } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL = 'http://localhost:44077/api';
  private loginUrl = '/users';
  private productListUrl = '/warehouses/products';
  private warehouseListUrl = '/warehouses';
  private machineListUrl = '/vendingMachines';
  private orderListUrl = '/orders';

  constructor(private http: HttpClient) { }

  login(data: loginForm) {
    return this.http.post<any>(this.baseURL + this.loginUrl, data)
  }

  getProductList() {
    return this.http.get<looseObj[]>(this.baseURL + this.productListUrl);
  }

  getwarehouseListUrl() {
    return this.http.get<looseObj[]>(this.baseURL + this.warehouseListUrl);
  }

  getAllProductByWareHouseId(wareHouseId: number) {
    return this.http.get<looseObj[]>(this.baseURL + this.warehouseListUrl + '/' + wareHouseId + '/products');

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

  createOrder(data: newOrderForm) {
    return this.http.post<any>(this.baseURL + this.orderListUrl, data);
  }
}
