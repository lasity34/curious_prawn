import React from "react";
import { Typography, Box, Button, Card, CardMedia, CardContent, CardActions, Chip } from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { Phone } from "@material-ui/icons";
import { Rating } from "@mui/material";


import useStyles from './styles'
import { PriceChange } from "@mui/icons-material";

const PlaceDetails = ({ place }) => {

    const classes = useStyles()

    const cuisine = place.cuisine.map(( { key, name}) => {
            return <p key={key}>{name}</p>
    })

  
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
                <Typography gutterBottom variant="subtitle1">{cuisine}</Typography>
            </Box>
       </CardContent>
       </Card>
    )
}

export default PlaceDetails;