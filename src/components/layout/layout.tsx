import React, {FC, PropsWithChildren} from "react";
import Headers from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Grid from "@mui/material/Grid";
import { useAuth } from "../providers/useAuth";



const Layout: FC<PropsWithChildren> = ({children}) => {
    const {user} = useAuth()
    return (
        <>
        {user &&
        <Headers />}
            <Grid container spacing={3} sx={{paddingX: 5, marginTop: 2,}}>
                {user &&
                <Grid item md={2}>
                    <Sidebar/>
                </Grid>}
                <Grid item marginLeft={user? 0: '25%'} marginY={-2.2} md={user? 4: 8} sx={{width: '150%'}}>
                    {children}
                </Grid>
            </Grid>
        </>
    );
};

export default Layout;