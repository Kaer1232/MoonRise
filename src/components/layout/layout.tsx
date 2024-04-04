import React, {FC} from "react";
import Headers from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

const Layout: React.FC = () => {
    return (
        <>
        <Headers />
        <div>
        <Sidebar/>
        </div>
        </>
    );
};

export default Layout;