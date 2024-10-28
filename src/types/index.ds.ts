export interface User {
  _id: string,
  username: string;
  password: string;
  createdAt: Date;
}

export interface Post {
  _id: string,
  userId: string,
  username: string,
  title: string;
  text: string;
  createdAt: Date;
}