export interface ICustomer {
  id: string
  account: string
  name: string
  lastNames: string
  addres: string
  active: boolean
}

export interface ICustomerAdd {
  account: string
  name: string
  lastNames: string
  addres: string
}

export interface ICustomerUpdate {
  id: string
  name: string
  lastNames: string
  addres: string
}
