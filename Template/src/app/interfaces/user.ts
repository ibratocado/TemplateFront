export interface IUserRespon {
  id: string
  acount: string
  role: string
  roleId: number
  curp: string
  lastName: string
  secondLastName: string
  name: string
  salary: number
  phone: string
}

export interface IUserAdd{
  roleId: number
  curp: string
  lastName: string
  secondLastName: string
  name: string
  salary: number
  phone: string
  account: string
  pount: string
}

export interface IUserUpdate {
  id: string
  roleId: number
  curp: string
  lastName: string
  secondLastName: string
  name: string
  salary: number
  phone: string
}
