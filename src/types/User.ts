export interface User {
  id: number;
  email: string;
  username: string;
  refrigerator_id: number;
  profile_image: {
    name: string;
    image: number;
  };
}
