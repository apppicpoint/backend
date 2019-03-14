import {User} from './user';

export interface Publication {
  id?: number;
  description?: string;
  user_id?: number;
  media: string;
  spot_id?: number;
  likes?: number;
  user?: User;
}
