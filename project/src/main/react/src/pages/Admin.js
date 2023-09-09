import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Elastic from '../Components/Elastic';
import { Routes, Route, Link} from 'react-router-dom';

// 가상의 게시판 데이터
const boardData = [
  { no: 1, name: '김피사', email: 'dhrtjr9@gmail.com', register: '2023-09-06' },
  { no: 2, name: '이피사', email: 'fisa9@gmail.com', register: '2023-09-07' },
  { no: 3, name: '배피사', email: 'df23d@naver.com', register: '2023-09-08' },
  // 추가 데이터를 여기에 추가
];

function Admin() {
  const [open, setOpen] = React.useState(false);

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
      
      <hr/>
      {/* 게시판 테이블 */}
      <div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>USER_NO</TableCell>
                <TableCell>USER_NAME</TableCell>
                <TableCell>USER_BIRTHDAY</TableCell>
                <TableCell>USER_GENDER</TableCell>
                <TableCell>USER_PHONE</TableCell>
                <TableCell>USER_EMAIL</TableCell>
                <TableCell>USER_SIGNUP</TableCell>
                <TableCell>USER_LOGOUT</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {boardData.map((row) => (
                <TableRow key={row.no}>
                  <TableCell>{row.no}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.birthday}</TableCell>
                  <TableCell>{row.gender}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.register}</TableCell>
                  <TableCell>{row.logout}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Admin;