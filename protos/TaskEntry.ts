// Original file: protos/tasks.proto


export interface TaskEntry {
  'id'?: (string);
  'name'?: (string);
  'description'?: (string);
  'listId'?: (number);
  'completed'?: (boolean);
  'unixTime'?: (string);
}

export interface TaskEntry__Output {
  'id': (string);
  'name': (string);
  'description': (string);
  'listId': (number);
  'completed': (boolean);
  'unixTime': (string);
}
