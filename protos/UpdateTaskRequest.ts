// Original file: protos/tasks.proto


export interface UpdateTaskRequest {
  'id'?: (string);
  'name'?: (string);
  'description'?: (string);
  'listId'?: (number);
  'completed'?: (boolean);
  'unixTime'?: (string);
}

export interface UpdateTaskRequest__Output {
  'id': (string);
  'name': (string);
  'description': (string);
  'listId': (number);
  'completed': (boolean);
  'unixTime': (string);
}
