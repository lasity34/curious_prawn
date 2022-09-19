import React from "react";
import { Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from "@material-ui/core";



import useStyles from './styles'

const PlaceDetails = ({ place }) => {

    const classes = useStyles()

    return (
       <div>
            <h1>{place.name}</h1>
       </div>
    )
}

export default PlaceDetails;