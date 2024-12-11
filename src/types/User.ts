export interface User {
  id: number;
  email: string;
  username: string;
  refrigerator_id: number;
  profile_image: {
    id: number;
    image_url: string;
    name: string;
  };
}
