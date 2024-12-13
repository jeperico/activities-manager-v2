import { IUser } from "./user";

export interface IAutenticatedUser {
  user: IUser
  token: string
  refresh: string
}
