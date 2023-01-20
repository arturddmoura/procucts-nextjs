import LeftDrawer from './leftDrawer';
import { useStore } from '@/pages/store';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function NavBar() {
    const { drawer, toggleDrawer } = useStore();

    return (
        <Box sx={{ flexGrow: 1 }}>
            {drawer && <LeftDrawer />}
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        onClick={toggleDrawer}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography href="/" variant="h6" component="a">
                        Products
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
