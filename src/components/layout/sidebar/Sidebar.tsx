import React, {FC} from "react";
import {Box} from "@mui/system"
import {Link} from "react-router-dom";
import UserItem from "./UserItems";
import MenuItems from './Menu/MenuItems';
import { Button, Card} from "@mui/material";
import NotAuth from "./NotAuth";
import { useAuth } from "../../providers/useAuth";

const Sidebar: React.FC = () => {
    const {user} = useAuth()
    return (
        <div>
            {user ? <UserItem />: <NotAuth/>} 
           <MenuItems/>
        </div>
    )
}

export default Sidebar;