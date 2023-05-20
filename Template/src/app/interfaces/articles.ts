export interface IArticle {
  id: string
  code: string
  description: string
  price: number
  image: string
  stock: number
  active: boolean
}

export interface IStoreArticle {
  id: string
  store: string
  article: string
  date: string
  articleNavigation: IArticle
}

export interface IArticleAdd {
  code: string,
  description: string
  price: number
  image: File
  stock: number
}

export interface IArticleUpdate {
  id: string
  code: string,
  description: string
  price: number
  image: File
  stock: number
}

export interface IStoreArticleAdd {
  store?: string
  article?: string
}

export interface IStoreArticleUpdate {
  id: string
  store: string
  article: string
}

export interface ICustomerArticleAdd {
  cuatomer: string
  article: string
}

export interface ICustomerArticleUpdate {
  id: string
  cuatomer: string
  article: string
}
