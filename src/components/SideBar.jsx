
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { List, ThemeProvider, Typography } from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import CategoryIcon from "@mui/icons-material/Category";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ListIcon from "@mui/icons-material/List";


export default function SideBar() {
    return (
        <Box sx={{
            width: 240,
            minHeight: "calc(100vh - 64px)",
            borderRight: "1px solid",
            borderColor: "divider",
            p: 2,
        }}>
            <Typography variant="subtitle2" sx={{ mb: 1, color: "text.secondary" }}>
                NAVIGATION
            </Typography>

            <Box sx={{ display: "flex" }}>
                <DashboardIcon sx={{ mr: 1 }} />
                <Link to="/">Dashboard</Link>
            </Box>

            <Box sx={{ display: "flex" }}>
                <CategoryIcon sx={{ mr: 1 }} />
                <Link to="/categories">Categories</Link>
            </Box >

            <Box sx={{ display: "flex" }}>
                <AddIcon sx={{ mr: 1 }} />
                <Link to="/createGoal">Create Goal</Link>
            </Box>

            <Box sx={{ display: "flex" }}>
                <VisibilityIcon sx={{ mr: 1 }} />
                <Link to="/goalDetails">Goal Details</Link>
            </Box>

            <Box sx={{ display: "flex" }}>
                <ListIcon sx={{ mr: 1 }} />
                <Link to="/goalsList"> Goals Lists</Link>
            </Box >

            <Box sx={{ display: "flex" }}>
                <SettingsIcon sx={{ mr: 1 }} />
                <Link to="/settings">Settings</Link>
            </Box>
        </Box>

    )

}