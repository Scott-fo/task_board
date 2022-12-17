// Original file: protos/source/subscription.proto

export const NotificationType = {
  NOTIFICATION_DEADLINE_PASSED: 'NOTIFICATION_DEADLINE_PASSED',
  NOTIFICATION_TASK_COMPLETED: 'NOTIFICATION_TASK_COMPLETED',
} as const;

export type NotificationType =
  | 'NOTIFICATION_DEADLINE_PASSED'
  | 0
  | 'NOTIFICATION_TASK_COMPLETED'
  | 1

export type NotificationType__Output = typeof NotificationType[keyof typeof NotificationType]
