import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { SwipeableDrawer, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import { AppBar, Box, Toolbar, IconButton, ListItemButton, ListItemIcon } from '@mui/material';
import { AppRegistration, Code, Home, Login, People, Menu, Logout } from '@mui/icons-material';

import logo from '../assets/images/logo.svg';
import { darkSecondaryColour } from './UI/Variables';

const Logo = styled.img`
    width: 50%;
    max-width: 154px;
    max-height: 20px;
    filter: invert(100);
`

const MenuContainer = styled.div`
    width: 225px;
    background-color: ${darkSecondaryColour};
    height: 100%;
`

const ListText = styled(Typography)`
    color: '#fff';
    font-weight: 700;
    font-size: 1.1em;
`

const checkLoggedIn = (user, navigate, setOpen) => {
    if (user) {
        return (
            <List>
                <ListItemButton divider sx={{ height: '60px' }} onClick={() => {
                    navigate('/home')
                    setOpen(false)
                }}>
                    <ListItemIcon><Home sx={{ filter: 'invert(100)' }} /></ListItemIcon>
                    <ListItemText primary={<ListText variant="p" style={{ color: '#fff', fontWeight: 700 }}>Home</ListText>} />
                </ListItemButton>
                <ListItemButton divider sx={{ height: '60px' }} onClick={() => {
                    navigate('/team')
                    setOpen(false)
                }}>
                    <ListItemIcon><People sx={{ filter: 'invert(100)' }} /></ListItemIcon>
                    <ListItemText primary={<ListText variant="p" style={{ color: '#fff', fontWeight: 700 }}>Teams</ListText>} />
                </ListItemButton>
                <ListItemButton divider sx={{ height: '60px' }} onClick={() => {
                    navigate('/skill')
                    setOpen(false)
                }}>
                    <ListItemIcon><Code sx={{ filter: 'invert(100)' }} /></ListItemIcon>
                    <ListItemText primary={<ListText variant="p" style={{ color: '#fff', fontWeight: 700 }}>Skills</ListText>} />
                </ListItemButton>
                <ListItemButton divider sx={{ height: '60px' }} onClick={() => {
                    navigate('/skill')
                    setOpen(false)
                }}>
                    <ListItemIcon><Logout sx={{ filter: 'invert(100)' }} /></ListItemIcon>
                    <ListItemText primary={<ListText variant="p" style={{ color: '#fff', fontWeight: 700 }}>Logout</ListText>} />
                </ListItemButton>
            </List>
        )
    } else {
        return (
            <List>
                <ListItem button sx={{ height: '60px' }} onClick={() => {
                    navigate('/login')
                    setOpen(false)
                }}>
                    <ListItemIcon><Login sx={{ filter: 'invert(100)' }} /></ListItemIcon>
                    <ListItemText primary={<ListText variant="p" style={{ color: '#fff', fontWeight: 700 }}>Login</ListText>} />
                </ListItem>
                <ListItem button sx={{ height: '60px' }} onClick={() => {
                    navigate('/register')
                    setOpen(false)
                }}>
                    <ListItemIcon><AppRegistration sx={{ filter: 'invert(100)' }} /></ListItemIcon>
                    <ListItemText primary={<ListText variant="p" style={{ color: '#fff', fontWeight: 700 }}>Register</ListText>} />
                </ListItem>
            </List>
        )
    }
}

const Header = () => {
    const [userHeader, setUserHeader] = useState({});
    const [open, setOpen] = useState(false);
    const navigateHeader = useNavigate();

    useEffect(() => {
        setUserHeader(sessionStorage.getItem('user'))
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, filter: 'invert(100)' }}
                        onClick={() => setOpen(true)}
                    >
                        <Menu />
                    </IconButton>
                    <Logo src={logo} alt="Team Makr" />
                    <SwipeableDrawer
                        anchor="left"
                        open={open}
                        onClose={() => setOpen(false)}
                        onOpen={() => { }}>
                        <MenuContainer>
                            <Box sx={{ textAlign: 'center', color: '#FFF', fontWeight: 700, fontSize: '1.3em' }} p={2}>
                                Menu
                            </Box>
                            <Divider />
                            {checkLoggedIn(userHeader, navigateHeader, setOpen)}
                        </MenuContainer>
                    </SwipeableDrawer>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;