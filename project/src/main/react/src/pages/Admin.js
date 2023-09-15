import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Elastic from '../Components/Elastic';
import { Routes, Route, Link} from 'react-router-dom';

function Admin() {
  const [open, setOpen] = React.useState(false);
  const [selectedMenu, setSelectedMenu] = React.useState(null);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      {/* 탑바 */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            WONU Admin
          </Typography>
        </Toolbar>
      </AppBar>

      {/* 사이드바 */}
      <Drawer open={open} onClose={toggleDrawer}>
        <List>
          <ListItem Button>
            <ListItemText primary="HOME" />
          </ListItem>
          <ListItem Button>
            <Link to="/user_info">
                <ListItemText primary="USER_INFO" />
            </Link>
          </ListItem>
          <ListItem Button>
            <Link to="/card_info">
                <ListItemText primary="CARD_INFO" />
            </Link>
          </ListItem>
        </List>
      </Drawer>
      
      <Elastic></Elastic>
    </div>
  );
}

export default Admin;