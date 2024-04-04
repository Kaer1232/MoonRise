import React, {FC, PropsWithChildren} from "react";
import Headers from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Grid from "@mui/material/Grid";
import {Route} from "react-router-dom";

const Layout: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <>
        <Headers />
        <Grid container spacing={2} marginX={5} marginTop={2}>
        <Grid item md={2}>
            <Sidebar />
        </Grid>
          <Route>
            <Grid item md={10}>
            {children}
            </Grid>
            </Route>
            </Grid>
        </>
    );
};

export default Layout;