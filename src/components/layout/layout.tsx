import React, {FC, PropsWithChildren} from "react";
import Headers from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Grid from "@mui/material/Grid";

const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <>
            <Headers />
            <Grid container spacing={3} sx={{paddingX: 5, marginTop: 2,}}>
                <Grid item md={2}>
                    <Sidebar/>
                </Grid>
                <Grid item marginY={-2.2} md={4} sx={{width: '800px'}}>
                    {children}
                </Grid>
            </Grid>
        </>
    );
};

export default Layout;