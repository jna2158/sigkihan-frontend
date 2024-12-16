export interface Notification {
  id: number;
  message: string;
  d_day: string;
  is_read: boolean;
  created_at: string;
}

export interface PopupNotification {
  id: number;
  content: string;
  date: string;
}