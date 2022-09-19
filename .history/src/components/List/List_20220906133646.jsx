
import React from "react";
import { Grid, Typography, InputLabel, MenuItem, FormControl,  CircularProgress, Select } from "@material-ui/core";

import useStyles from './styles'

const List = () => {
    const classes = useStyles()


    return (
        <div className={classes.container}>
            <Typography variant="h4">
                Restaurants, hotels & Attractions around you
            </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={''} onChange={''}>

                </Select>
            </FormControl>
        </div>
    )
}

export default List;