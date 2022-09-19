import React from "react";
import { Typography, Box, Button, Card, CardMedia, CardContent, CardActions, Chip } from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { Phone } from "@material-ui/icons";
import { Rating } from "@mui/material";


import useStyles from './styles'
import { PriceChange } from "@mui/icons-material";
import { useState } from "react";

const PlaceDetails = ({ place, id }) => {

    const classes = useStyles()


     

    return (
       <Card elevation={8}>
            <CardMedia 
            style={{ height: 350}}
            image={place.photo ? place.photo.images.large.url : "https://unsplash.com/photos/GXXYkSwndP4"}
            title={place.name}
            />
       <CardContent>
            <Typography gutterBottom variant="h5">
                {place.name}
            </Typography>
            <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">Cuisine</Typography>
                {place?.cuisine.slice(0.1).map(({ name }) => {
                 <Typography variant="subtitle1">{name}</Typography>
                })}
              
            </Box>
            <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">Ranking</Typography>
                <Typography variant="subtitle1">{place.ranking}</Typography>
            </Box>
            
       </CardContent>
       </Card>
    )
}

export default PlaceDetails;