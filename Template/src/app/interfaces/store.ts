export interface IStoreAdd {
  branch: string
  addres: string
}

export interface IStoreUpdate {
  id: string
  branch: string
  addres: string
}

export interface IStore {
  id: string
  branch: string
  addres: string
  active: boolean
}
