import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import { Paper } from '@mui/material';
import { Outlet } from 'react-router-dom';

const drawerWidth = 240;

export default function DrawerNav() {

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                elevation={0}
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: "white" }}
            >
                <Toolbar>
                    <Typography variant="subtitle1" noWrap component="div" sx={{ color: 'black', fontWeight: 'bold' }}>
                        {/* Start Managing Before Losing */}
                    </Typography>
                </Toolbar>
                <Divider />
            </AppBar>
            <Drawer
                PaperProps={{
                    sx: {
                        backgroundColor: "#e3ece0",
                        border: "none"
                    }
                }}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                    border: "none"
                }}
                variant="permanent"
                anchor="left"

            >
                <Toolbar>
                    <Typography variant="body1" noWrap component="div" sx={{ color: 'black', fontWeight: 500 }}>
                        Expenses Tracker
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    <ListItem key={"Home"} sx={{ paddingRight: 1, paddingLeft: 1, paddingTop: 0.5, paddingBottom: 0.5, color: 'black' }}>
                        <ListItemButton sx={{ borderRadius: 10, color: '#22231a' }}>
                            <ListItemIcon sx={{ color: '#22231a' }}>
                                <HomeOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Home"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={"Analytics"} sx={{ paddingRight: 1, paddingLeft: 1, paddingTop: 0.5, paddingBottom: 0.5, color: 'black' }}>
                        <ListItemButton sx={{ borderRadius: 10, color: '#22231a' }}>
                            <ListItemIcon sx={{ color: '#22231a' }}>
                                <BarChartOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Analytics"} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, border: "none" }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}
