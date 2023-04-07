import React from 'react'

import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Paper, Divider, CardActionArea } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from 'next/image'
import imagepodcast from '../public/Screenshot from 2023-04-04 23-25-07.png'

const options = [
    'Add private RSS FeedSharp',
    'Import  or Export OPML'
];
const ITEM_HEIGHT = 48;

function MainStyle() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box p="20px">
                    <Typography variant='h5'>My Podcasts</Typography>
                    <Typography variant='subtitle1'>Sorted by most recently updated</Typography>
                </Box>
                <Box>
                    <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? 'long-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        MenuListProps={{
                            'aria-labelledby': 'long-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '30ch',
                            },
                        }}
                    >
                        {options.map((option) => (
                            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>


            </Box>
            <Divider />
            <Box display="flex" alignItems="center">
                <Card sx={{ maxWidth: 300, margin: "20px" }}>
                    <CardActionArea>
                        <CardMedia>
                            <Image
                                src={imagepodcast}
                                alt="Picture of the author"
                                width={200}
                                height={200}

                            />
                        </CardMedia>
                        <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
                            <Box>
                                <Typography variant="subtitle1" component="div">
                                    The Deck Investigates
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    audiochuck
                                </Typography>
                            </Box>
                            <Box>
                                <IconButton
                                    aria-label="more"
                                    id="long-button"
                                    aria-controls={open ? 'long-menu' : undefined}
                                    aria-expanded={open ? 'true' : undefined}
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                >
                                    <MoreVertIcon />
                                </IconButton>
                                <Menu
                                    id="long-menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'long-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    PaperProps={{
                                        style: {
                                            maxHeight: ITEM_HEIGHT * 4.5,
                                            width: '30ch',
                                        },
                                    }}
                                >
                                    <MenuItem>Remove From My Podcast</MenuItem>
                                    <MenuItem>Go to Podcast</MenuItem>
                                    <MenuItem>Share podcast</MenuItem>
                                    <MenuItem>Hide podcast</MenuItem>
                                </Menu>
                            </Box>


                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>

        </Box>

    )
}

export default MainStyle