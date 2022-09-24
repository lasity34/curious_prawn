import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@mui/material";
import { getPlacesData } from "./api/index";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { cuisineList } from "./Objects/cuisines";



const App = () => {
  const [places, setPlaces] = useState([]);

  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [filteredCuisines, setFilteredCuisines] = useState(places);
  const [cuisine, setCuisine] = useState("Asian");
  const [cuisineKey, setCuisineKey]  = useState({ })

  const [childClicked, setChildClicked] = useState(null);

  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState({});


  const [rating, setRating] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);

    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  // useEffect(() => {
  //   const cuisineName = places.filter((item) => {
  //     return  item.cuisine.some((item2) => item2.name === cuisine)
  //   })
   
  //   setFilteredCuisines(cuisineName);
  // }, [cuisine]);
  // && place.cuisine.some((item) => item.name === cuisine) 
 
  useEffect(() => {
    const key = cuisineList.filter((item) => item.name === cuisine)
    setCuisineKey(key)
  }, [cuisine])

  useEffect(() => {
    if (cuisineKey, bounds.sw && bounds.ne) {
      setIsLoading(true);
      getPlacesData( bounds.sw, bounds.ne).then((data) => {
        setPlaces(
          data.filter((place) => {
            return  place.name && place.num_reviews > 0    })
           
        );
       
        setFilteredPlaces([]);
        setIsLoading(false);
      });
    }
  }, [ bounds, cuisine]);

  return (
    <div>
      <CssBaseline />

      <Header
        setCoords={setCoords}
        setRating={setRating}
        rating={rating}
        cuisine={cuisine}
        cuisineList={cuisineList}
        setCuisine={setCuisine}
      />

      <Grid container  style={{ width: "95%", margin: '1em auto' }}>
        <Grid item xs={12} md={9}>
          <Map
            setCoords={setCoords}
            setBounds={setBounds}
            coords={coords}
            places={
               filteredCuisines.length
                ?  filteredCuisines 
                : places
            }
            setChildClicked={setChildClicked}
          />
        
        </Grid>
        <Grid item xs={12} md={3}>
          <List
            places={
              filteredCuisines.length
               ?  filteredCuisines 
               : places
           }
            childClicked={childClicked}
            isLoading={isLoading}
            setRating={setRating}
            rating={rating}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
