// Original file: protos/tasks.proto


export interface CreateTaskRequest {
  'id'?: (string);
  'name'?: (string);
  'description'?: (string);
  'listId'?: (number);
  'completed'?: (boolean);
  'unixTime'?: (string);
}

export interface CreateTaskRequest__Output {
  'id': (string);
  'name': (string);
  'description': (string);
  'listId': (number);
  'completed': (boolean);
  'unixTime': (string);
}
