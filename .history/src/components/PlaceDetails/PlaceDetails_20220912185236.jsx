import React from "react";
import { Typography } from "@material-ui/core";

import useStyles from './styles'

const PlaceDetails = ({ place, id }) => {

    const classes = useStyles()

    return (
       <div>

            <Typography variant="h6">
                {place.name}
            </Typography>
            <Typography variant="body1">
                {place.ranking}
            </Typography>
            <Typography variant="body2">
                {place.description}
            </Typography>
            <Typography variant="button">
                {place.is_closed ? "Closed" : "Open"}
            </Typography>
            <Typography variant="body2">
                {place.photo[id].caption}
            </Typography>
            <div>
              {/* <img src={place.photo.images.small.url} /> */}

            </div>
       </div>
    )
}

export default PlaceDetails;