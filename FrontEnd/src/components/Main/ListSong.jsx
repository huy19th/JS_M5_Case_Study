
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import getSong from '../../service/ListSong';
import {useEffect, useState} from "react";


import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export function ResponsiveGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Item>xs=2</Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}


export default function ActionAreaCard() {
    const [song,setSongs] = useState([]);

    useEffect(() =>{
        getSong().then(result =>{
            setSongs(result.data)
        })
    }, [])
    console.log(song.data)
    if (song.length !== 0) {
        return (
            <>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {/*{Array.from(Array(6)).map((_, index) => (*/}
                        {/*    <Grid item xs={2} sm={4} md={4} key={index}>*/}
                        {/*        <Item>xs=2</Item>*/}
                        {/*    </Grid>*/}
                        {/*))}*/}
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

                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.title}
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
        return <p>Loading..</p>
    }
}