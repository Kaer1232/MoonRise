import React, {FC} from "react";
import {Box} from "@mui/system"
import {Link} from "react-router-dom";
import UserItem from "./UserItems";

const Sidebar: React.FC = () => {
    return (
        <div>
           <UserItem />
        </div>
    )
}

export default Sidebar;