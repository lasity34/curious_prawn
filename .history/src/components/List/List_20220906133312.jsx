
import React from "react";
import { Grid, Typography, InputLabel, MenuItem, FormControl,  CircularProgress, Select } from "@material-ui/core";

import useStyles from './styles'

const List = () => {
    const classes = useStyles()


    return (
        <div className={classes.container}>
            <Typography variant="h4">
                Restaurants, hotels & Attracions around you
            </Typography>
        </div>
    )
}

export default List;