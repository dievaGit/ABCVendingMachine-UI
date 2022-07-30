export interface looseObj {
  [key: string]: any
}

export interface loginForm {
  userName: string,
  pass: string
}

export interface newOrderForm {
  warehouseId: 1,
  vendingMachineId: 1,
  items: [
      {
          productId: 1,
          quantity: 2,
          ProductPrice: 5
      },
      {
          productId: 2,
          quantity: 2,
          ProductPrice: 5
      }
  ] 
}