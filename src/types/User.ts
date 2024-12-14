export interface User {
  id: number;
  email: string;
  username: string;
  refrigerator_id: number;
  profile_image: {
    id: number;
    name: string;
    image_url: string;
  };
}

export interface UserProfile {
  id: number;
  email: string;
  name: string;
  profileImage: {
    name: string;
    image: number;
  };
  refrigerator_id: number;
}
