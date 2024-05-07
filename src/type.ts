import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { Timestamp } from "firebase/firestore";
import { Dispatch, SetStateAction } from "react";

export type TypeSetState<T> = Dispatch<SetStateAction<T>>

export interface IUser{
    id: string;
    avatar: string;
    name: string;
}

export interface IUserData{
  email: string;
  password: string;
}

export interface IPost {
  id: string;
  author: IUser
  createdAdd: string;
  content: string;
  image?: string[];
  likes: number;
}

export interface IMenuItem{
    title: string;
    link: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string}
}

export interface IMessage{
  user: IUser,
  message: string,
  timestamp: Timestamp;
}