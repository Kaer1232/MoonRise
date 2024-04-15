import React, {FC} from "react";
import {Box} from "@mui/system"
import {Link} from "react-router-dom";
import UserItem from "./UserItems";
import MenuItems from './Menu/MenuItems';

const Sidebar: React.FC = () => {
    return (
        <div>
           <UserItem />
           <MenuItems/>
        </div>
    )
}

export default Sidebar;