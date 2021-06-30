export interface ITodoList {
  id: number
  title: string
  completed: boolean
}

export interface ISidebarList {
  name: string
  title: string
  children: ISidebarList[]
}
