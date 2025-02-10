export interface Food {
  id: number;
  name: string;
  default_food_name?: string;
  purchase_date: string;
  expiration_date: string;
  quantity: number;
  image_url?: string;
  image?: string;
  storage_type: "refrigerated" | "frozen" | "room_temp";
}

export interface FoodForm {
  name: string;
  quantity: number;
  purchase_date: string;
  expiration_date: string;
  storage_type: "refrigerated" | "frozen" | "room_temp";
}

export interface DefaultFood {
  id: number;
  name: string;
  image: string;
}

export interface NewFood {
  id: null;
  name: string;
  image_url?: string;
  image?: string;
}

export interface FoodAction {
  action: "consumed" | "discarded";
  quantity: number;
}
