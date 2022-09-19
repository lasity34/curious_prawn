import React from "react";
import googleMapReact from "google-map-react";
import { paper, Typography, useMediaQuery} from '@material-ui/core'
import { LocationCityOutlined } from "@mui/icons-material";
import { Rating } from "@mui/material";


import useStyles from './styles'

const Map = () => {
    const classes = useStyles()
    const isMobile = useMediaQuery(`(min-width:600px)`)



    return (
        <h1>Map</h1>
    )
}

export default Map;