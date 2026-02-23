import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

import { Box, CssBaseline, ThemeProvider } from "@mui/material"
import Navbar from "../components/Navbar";
import { Paper } from "@mui/material";
import { useMemo, useState } from "react";
import getTheme from "../theme";
export default function Layout() {
    const toggleMode = () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
    };
    const [mode, setMode] = useState("light");

    const theme = useMemo(() => getTheme(mode), [mode]);


    const handleMenuClick = () => {
        alert("Menu clicked (later we can make this open a drawer)");
    };


    return (
        <ThemeProvider theme={theme}>

            <Box >
                <CssBaseline />
                <Navbar onMenuClick={handleMenuClick}
                    mode={mode}
                    onToggleMode={toggleMode} />
                <Box sx={{ display: "flex" }}>
                    <SideBar />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Paper elevation={3} sx={{ p: 3, minHeight: "calc(100vh - 64px)" }}>
                            <Outlet />
                        </Paper>
                    </Box>


                </Box>


            </Box>
        </ThemeProvider>
    );
}