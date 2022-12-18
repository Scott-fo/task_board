export interface Task {
  id: string;
  name: string;
  description: string;
  listId: string;
  unixTime: string;
  completed?: boolean;
}

export interface EditingTask extends Task {
  parsedTime: string;
}
