export interface IGenericRespon<T> {
  respon: IGenericStructRespon<T>
}

export interface IGenericStructRespon<T> {
  state: number
  message: string
  data: T
}
