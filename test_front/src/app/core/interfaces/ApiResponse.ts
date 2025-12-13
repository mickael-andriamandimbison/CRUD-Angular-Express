import { IEntity } from './Entity';
import { IUser } from './User';
import { IUserEntity } from './UserEntity';

export interface IApiRes {
  message: string;
  status: string;
  success: boolean;
  data : any[] | any
}
