import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { useAuth } from '../../auth/AuthContext'
import styled from 'styled-components'
import { List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { AppRegistration, Code, Home, Login, Logout, People, Search } from '@mui/icons-material';

import { iconColor } from '../../core/utils/Variables';

const ListText = styled(Typography)`
    font-weight: 700;
    font-size: 1.1em;
`

const headerLoggedIn = [{
    text: 'Home',
    to: '/home',
    icon: <Home sx={{ color: iconColor }} />
},
{
    text: 'Teams',
    to: '/team',
    icon: <People sx={{ color: iconColor }} />
},
{
    text: 'Skills',
    to: '/skill',
    icon: <Code sx={{ color: iconColor }} />
},
{
    text: 'Search',
    to: '/search',
    icon: <Search sx={{ color: iconColor }} />
}]

const HeaderMenuList = (props) => {
    const { user, unsetCurrentUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {

    }, [user])

    const logout = async () => {
        await unsetCurrentUser()
            .then((res) => {
                if (res.status === 204) {
                    navigate('/logout-success');
                } else {
                    throw Error('Internal server error')
                }
            })
            .catch(err => navigate('/internal'));
    }

    if (user) {
        return (
            <List>
                {headerLoggedIn.map((item, index) => (
                    <ListItemButton key={index} divider sx={{ height: '60px' }} onClick={() => {
                        navigate(item.to)
                        props.setOpen(false)
                    }}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={<ListText variant="p">{item.text}</ListText>} />
                    </ListItemButton>
                ))}

                <ListItemButton key={4054} divider sx={{ height: '60px' }} onClick={async () => {
                    await logout()
                    props.setOpen(false)
                }}>
                    <ListItemIcon><Logout sx={{ color: iconColor }} /></ListItemIcon>
                    <ListItemText primary={<ListText variant="p">Logout</ListText>} />
                </ListItemButton>
            </List>
        )
    } else {
        return (
            <List>
                <ListItemButton key={1} divider sx={{ height: '60px' }} onClick={() => {
                    navigate('/login')
                    props.setOpen(false)
                }}>
                    <ListItemIcon><Login sx={{ color: iconColor }} /></ListItemIcon>
                    <ListItemText primary={<ListText variant="p">Login</ListText>} />
                </ListItemButton>

                <ListItemButton key={2} divider sx={{ height: '60px' }} onClick={() => {
                    navigate('/register')
                    props.setOpen(false)
                }}>
                    <ListItemIcon><AppRegistration sx={{ color: iconColor }} /></ListItemIcon>
                    <ListItemText primary={<ListText variant="p">Register</ListText>} />
                </ListItemButton>
            </List>
        )
    }
}

export default HeaderMenuList;