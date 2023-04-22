export interface IGenericRespon<T> {
  respon: IGenericStructRespon<T>
}

export interface IGenericStructRespon<T> {
  state: number
  message: string
  data: T
}

export interface IGenericPaginator<T> {
  page: number
  totalPages: number
  totalRecords: number
  recordsByPage: number
  data: T
}

