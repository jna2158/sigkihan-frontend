export interface Memo {
  id: number;
  title: string;
  content: string;
  user: {
    id: number;
    image: {
      id: number;
      image: string;
      name: string;
    };
    name: string;
  };
  created_at: string;
}
