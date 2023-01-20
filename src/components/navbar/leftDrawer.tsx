import { useStore } from '@/pages/store';
import HomeIcon from '@mui/icons-material/Home';
import TableViewIcon from '@mui/icons-material/TableView';
import { ListItem, ListItemText, List, ListItemIcon, Link, ListItemButton } from '@mui/material';
import Drawer from '@mui/material/Drawer';

const linksList = [
    {
        text: 'Home',
        icon: <HomeIcon />,
        to: '/', // <-- add link targets
    },
    {
        text: 'DataGrid',
        icon: <TableViewIcon />,
        to: '/datagrid',
    },
];

export default function LeftDrawer() {
    const { drawer, toggleDrawer } = useStore();

    return (
        <div>
            <>
                <Drawer anchor="left" open={drawer} onClose={toggleDrawer}>
                    <List>
                        {linksList.map((item, index) => {
                            return (
                                <ListItemButton href={item.to}>
                                    {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                                    <ListItemText sx={{ mr: 3 }} primary={item.text} />
                                </ListItemButton>
                            );
                        })}
                    </List>
                </Drawer>
            </>
        </div>
    );
}
