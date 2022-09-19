import React from "react";
import { Typography } from "@material-ui/core";

const PlaceDetails = ({ place }) => {
    return (
       <div>
            <Typography variant="h4">
                {place.name}
            </Typography>
            <Typography variant="subtitle1">
                {place.ranking}
            </Typography>
            <Typography variant="subtitle1">
                {place.descrption}
            </Typography>
            <Typography variant="subtitle1">
                {place.ranking}
            </Typography>
       </div>
    )
}

export default PlaceDetails;