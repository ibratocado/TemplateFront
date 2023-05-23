export interface IRespon<T> {
  respon: IGenericRespon<T>
}

export interface IGenericRespon<T> {
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

export interface IGenericPaginatorParameterRequest<T> {
  page: number
  recordsByPage: number
  data: T
}

