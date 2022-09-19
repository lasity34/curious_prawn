
import React, { useState ,useEffect} from "react";
import { CssBaseline, Grid } from "@mui/material";

import { getPlacesData } from './api/index'
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

const App = () => {

    const [places, setPlaces] = useState([])

    const [coordinates, setCoordinates] = useState({})
    const [bounds, setBounds] = useState(null)
    
    

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude} }) => {
            setCoordinates({ lat: latitude, lng: longitude })
        })
        console.log(coordinates)
    }, [])




    useEffect(() => {
    
        getPlacesData(bounds.sw, bounds.ne)
            .then((data) => {
                setPlaces(data)
            })
    }, [coordinates, bounds])

    return (
        <div>
            <CssBaseline />
            <Header />
            <Grid container spacing={2} style={{ width: '100%' }}>
                <Grid item xs={12}  md={4}>
                    <List />
                </Grid>
                <Grid item xs={12}  md={8}>
                    <Map 
                    setCoordinates={setCoordinates}
                    setBounds={setBounds}
                    coordinates={coordinates}
                    />
                </Grid>
            </Grid>
            
        </div>
    );

}

export default App;