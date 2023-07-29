import * as React from 'react';
import { FC } from "react";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface Props{}

const NavSettings: FC<Props> = () => {
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <>
            <div className="settings-desktop lg:block hidden">
                <Button
                    id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    hi desktop
                </Button>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </div>
            <div className="settings-mobile block lg:hidden absolute bottom-0 w-full">
                <button className='m-6' onClick={() => { setDrawerOpen(!drawerOpen) }}>
                    hi
                </button>
                <SwipeableDrawer
                    anchor='bottom'
                    open={drawerOpen}
                    onClose={() => {setDrawerOpen(false)}}
                    onOpen={() => {setDrawerOpen(true)}}
                >
                    hi
                </SwipeableDrawer>
            </div>
        </>
    )
}

export default NavSettings;
