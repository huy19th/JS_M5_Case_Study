
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {getSongVietNam} from '../../../services/ListSong';
import {useEffect, useState} from "react";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function ActionAreaCard() {
    const [song,setSongs] = useState([]);

    useEffect(() =>{
        getSongVietNam().then(result =>{
            setSongs(result.data)
        })
    }, [])
    console.log(song.data)
    if (song.length !== 0) {
        return (
            <>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {song.data.map((item, index) =>{
                            return (<Grid item xs={2} sm={4} md={4} key={index}>
                                <Card sx={{ marginLeft :'200px', marginBottom: '10px'} }>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="10px"
                                            image={item.image}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {item.artists.map(item =>(
                                                    <span>{item.name}  </span>
                                                ))
                                                }
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>)
                        })}
                    </Grid>
                </Box>

            </>
        );
    } else {
        return(
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={song.length === 0}

            >
                <CircularProgress color="inherit" />
            </Backdrop>
        )
    }
}