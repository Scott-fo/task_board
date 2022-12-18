export interface ListInterface {
  id: string;
  name: string;
}

export interface ListState {
  id: string;
  name: string;
  lists: ListInterface[];
}
