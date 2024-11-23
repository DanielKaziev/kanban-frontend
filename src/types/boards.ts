export interface IBoard {
  id: string;
  name: string;
  description: string;
  userRole: string;
  isPrivate: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ICreateBoard {
  name: string;
  description: string;
  isPrivate: boolean;
}
