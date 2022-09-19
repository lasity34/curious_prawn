
import React, { useState ,useEffect} from "react";
import { CssBaseline, Grid } from "@mui/material";

import { getPlacesData } from './api/index'
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

const App = () => {

    
    const [coords, setCoords] = useState({})
    const [bounds, setBounds] = useState({})
    const [childClicked, setChildClicked] = useState({})
    
    const [places, setPlaces] = useState([0,1])
   

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude} }) => {
            setCoords({ lat: latitude, lng: longitude })
        })

    }, [])

    console.log(places)
  


    useEffect(() => {
      
        getPlacesData(bounds.sw, bounds.ne)
            .then((data) => {
                setPlaces(data)
            })
    }, [coords, bounds])

    return (
        <div>
            <CssBaseline />
            <Header />
            <Grid container spacing={2} style={{ width: '100%' }}>
                <Grid item xs={12}  md={4}>
                    <List 
                    places={places} 
                    childClicked={childClicked}
                    />
                </Grid>
                <Grid item xs={12}  md={8}>
                    <Map 
                    setCoords={setCoords}
                    setBounds={setBounds}
                    coords={coords}
                    places={places}
                    setChildClicked={setChildClicked}
                    />
                </Grid>
            </Grid>
            
        </div>
    );

}

export default App;