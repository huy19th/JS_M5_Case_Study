import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import AccountMenu from './AppBars/AccountMenu';
import SearchBar from './AppBars/SearchBar';
import DrawerButton from './AppBars/DrawerButton';
import Drawer from './AppBars/Drawer';

export default function PrimarySearchAppBar() {
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleDrawer = () => {
        setOpen(!open);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <DrawerButton open={open} handleDrawer={handleDrawer} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Fragments
                    </Typography>
                    <SearchBar />
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <AccountMenu />
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer open={open} handleClose={handleDrawerClose} />
        </Box>
    );
}