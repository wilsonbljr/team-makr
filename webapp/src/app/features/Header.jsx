import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../auth/AuthContext'
import styled from 'styled-components'

import { SwipeableDrawer, Divider, Button, AppBar, Box, Toolbar, IconButton } from '@mui/material'
import { Menu, Search } from '@mui/icons-material'

import HeaderMenuList from '../components/HeaderMenuList'

import logo from '../../assets/logo.svg'
import { iconColor, primaryColour } from '../../core/utils/Variables'

const Logo = styled.img`
    width: 100%;
    max-width: 154px;
    max-height: 20px;
    filter: invert(100);

    @media (max-width: 400px) {
        width: 120px;
    }
`

const MenuContainer = styled.div`
    width: 225px;
    background-color: ${primaryColour};
    height: 100%;
`

const Header = () => {
    const [open, setOpen] = useState(false);
    const { user } = useAuth();

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
                        <Menu sx={{ color: iconColor }} />
                    </IconButton>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', minHeight: '40px', minWidth: '150px' }}>
                        {user ? <Button
                            startIcon={<Search />}
                            variant='outlined'
                            sx={{ width: { xs: '126px', sm: '200px', lg: '250px' }, mr: 2, p: { xs: 0, sm: 1, lg: 1 } }}
                            component={Link}
                            to='/search'
                        >Search</Button> : <> </>}

                        <Logo src={logo} alt='Team Makr' />
                    </Box>
                    <SwipeableDrawer
                        anchor="left"
                        open={open}
                        onClose={() => setOpen(false)}
                        onOpen={() => { }}>
                        <MenuContainer>
                            <Box sx={{ textAlign: 'center', fontWeight: 700, fontSize: '1.3em' }} p={2}>
                                Menu
                            </Box>
                            <Divider />
                            <HeaderMenuList setOpen={setOpen} />
                        </MenuContainer>
                    </SwipeableDrawer>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;