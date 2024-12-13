import { IBase } from './../base'

export interface IUser extends IBase {
  email: string
  first_name?: string
  last_name?: string
}
