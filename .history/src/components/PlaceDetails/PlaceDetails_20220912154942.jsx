import React from "react";
import { Typography } from "@material-ui/core";

const PlaceDetails = ({ place }) => {
    return (
       <div>
            <Typography variant="h4">
                {place.name}
            </Typography>
       </div>
    )
}

export default PlaceDetails;