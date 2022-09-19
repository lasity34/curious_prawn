
import React, { useState ,useEffect} from "react";
import { CssBaseline, Grid } from "@mui/material";

import { getPlacesData } from './api/index'
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

const App = () => {

    const [places, setPlaces] = useState([])

    const [coordintes, setCoordinates] = useState({})
    const [bounds, setBounds] = useState(null)
    
    useEffect(() => {
        getPlacesData()
            .then((data) => {
                setPlaces(data)
                console.log(data)
            })
    }, [])

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
                    />
                </Grid>
            </Grid>
            
        </div>
    );

}

export default App;