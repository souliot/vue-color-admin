export interface ITodoList {
  id: number
  title: string
  completed: boolean
}

export interface ISidebarList {
  title: string
  active: boolean
  children: ISidebarList[]
}
