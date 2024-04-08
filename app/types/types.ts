export interface User {
  id: number;
  email: string;
  password: string;
  createdAt: Date;
}

export interface Picture {
  id: number;
  pictureName: string;
  createdAt: Date;
}
