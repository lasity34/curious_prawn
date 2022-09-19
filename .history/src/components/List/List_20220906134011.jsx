
import React, { useState } from "react";
import { Grid, Typography, InputLabel, MenuItem, FormControl,  CircularProgress, Select } from "@material-ui/core";

import useStyles from './styles'

const List = () => {
    const classes = useStyles()
    const [type, setType] = useState('restaurants')

    return (
        <div className={classes.container}>
            <Typography variant="h4">
                Restaurants, hotels & Attractions around you
            </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default List;