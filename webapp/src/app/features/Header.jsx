import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { SwipeableDrawer, Divider, List, ListItemText, Typography, Button } from '@mui/material'
import { AppBar, Box, Toolbar, IconButton, ListItemButton, ListItemIcon } from '@mui/material'
import { AppRegistration, Code, Home, Login, People, Menu, Logout, Search } from '@mui/icons-material'

import logo from '../../assets/logo.svg'
import { primaryColour } from '../../core/utils/Variables'
import { useAuth } from '../../auth/AuthContext'

const Logo = styled.img`
    width: 50%;
    max-width: 154px;
    max-height: 20px;
    filter: invert(100);
`

const MenuContainer = styled.div`
    width: 225px;
    background-color: ${primaryColour};
    height: 100%;
`

const ListText = styled(Typography)`
    color: '#fff';
    font-weight: 700;
    font-size: 1.1em;
`

const checkLoggedIn = (user, navigate, setOpen, logout) => {
    if (user) {
        return (
            <List>
                <ListItemButton divider sx={{ height: '60px', color: 'white' }} onClick={() => {
                    navigate('/home')
                    setOpen(false)
                }}>
                    <ListItemIcon><Home sx={{ color: 'white' }} /></ListItemIcon>
                    <ListItemText primary={<ListText variant="p">Home</ListText>} />
                </ListItemButton>

                <ListItemButton divider sx={{ height: '60px', color: 'white' }} onClick={() => {
                    navigate('/team')
                    setOpen(false)
                }}>
                    <ListItemIcon><People sx={{ color: 'white' }} /></ListItemIcon>
                    <ListItemText primary={<ListText variant="p">Teams</ListText>} />
                </ListItemButton>

                <ListItemButton divider sx={{ height: '60px', color: 'white' }} onClick={() => {
                    navigate('/skill')
                    setOpen(false)
                }}>
                    <ListItemIcon><Code sx={{ color: 'white' }} /></ListItemIcon>
                    <ListItemText primary={<ListText variant="p">Skills</ListText>} />
                </ListItemButton>

                <ListItemButton divider sx={{ height: '60px', color: 'white' }} onClick={async () => {
                    navigate('/search')
                    setOpen(false)
                }}>
                    <ListItemIcon><Search sx={{ color: 'white' }} /></ListItemIcon>
                    <ListItemText primary={<ListText variant="p">Search</ListText>} />
                </ListItemButton>

                <ListItemButton divider sx={{ height: '60px', color: 'white' }} onClick={async () => {
                    await logout()
                    setOpen(false)
                }}>
                    <ListItemIcon><Logout sx={{ color: 'white' }} /></ListItemIcon>
                    <ListItemText primary={<ListText variant="p">Logout</ListText>} />
                </ListItemButton>
            </List>
        )
    } else {
        return (
            <List>
                <ListItemButton divider sx={{ height: '60px', color: 'white' }} onClick={() => {
                    navigate('/login')
                    setOpen(false)
                }}>
                    <ListItemIcon><Login sx={{ color: 'white' }} /></ListItemIcon>
                    <ListItemText primary={<ListText variant="p">Login</ListText>} />
                </ListItemButton>
                <ListItemButton divider sx={{ height: '60px', color: 'white' }} onClick={() => {
                    navigate('/register')
                    setOpen(false)
                }}>
                    <ListItemIcon><AppRegistration sx={{ color: 'white' }} /></ListItemIcon>
                    <ListItemText primary={<ListText variant="p">Register</ListText>} />
                </ListItemButton>
            </List>
        )
    }
}

const Header = () => {
    const [userHeader, setUserHeader] = useState({});
    const [open, setOpen] = useState(false);
    const { user, unsetCurrentUser } = useAuth();
    const navigateHeader = useNavigate();

    useEffect(() => {
        setUserHeader(user)
    }, [user])

    const logout = async () => {
        await unsetCurrentUser()
            .then((res) => {
                if (res.status === 204) {
                    navigateHeader('logout-success');
                } else {
                    throw Error('Internal server error')
                }
            })
            .catch(err => navigateHeader('/internal'));
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ backgroundColor: primaryColour }} position="static">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => setOpen(true)}
                    >
                        <Menu sx={{ color: 'white' }} />
                    </IconButton>
                    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <Button
                            startIcon={<Search />}
                            variant='outlined'
                            sx={{ width: { xs: '126px', sm: '200px', lg: '300px' }, mr: 2, p: {xs: 0, sm: 1, lg: 2} }}
                            component={Link}
                            to='/search'
                            >Search</Button>
                        <Logo src={logo} alt="Team Makr" />
                    </Box>
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
                            {checkLoggedIn(userHeader, navigateHeader, setOpen, logout)}
                        </MenuContainer>
                    </SwipeableDrawer>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;