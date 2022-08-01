export interface looseObj {
  [key: string]: any
}

export interface loginForm {
  userName: string,
  pass: string
}

export interface item{
  productId: number,
  quantity: number,
  productPrice: number
}

export interface newOrderForm {
  warehouseId: number,
  vendingMachineId: number,
  items: item[] 
}