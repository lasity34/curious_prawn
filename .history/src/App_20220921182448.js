import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@mui/material";
import { getPlacesData } from "./api/index";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { cuisineList } from "./Objects/cuisines"


const App = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [filteredCuisines, setFilteredCuisines] = useState([])
  const [childClicked, setChildClicked] = useState(null);

  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState({});

  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState(1);
  const [cuisine, setCuisine] = useState("Italian");
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
  useEffect(() => {
    
 const filteredCuisines = places?.map((place) => place?.cuisine?.map(({ name }) => {
 return  <p key={name}>{name}</p>
 }))
 setFilteredCuisines(filteredCuisines)
}, [cuisine])


  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(
          data
            .filter((place) => place.name && place.num_reviews > 0)
            .splice(0, 10)
        );
        setFilteredCuisines([])
        setFilteredPlaces([]);
        setIsLoading(false);
      });
    }
  }, [type, bounds]);

 console.log(filteredCuisines)

  return (
    <div>
      <CssBaseline />
       
      <Header
        setCoords={setCoords}
        type={type}
        setType={setType}
        setRating={setRating}
        rating={rating}
        cuisine={cuisine}
        cuisineList={cuisineList}
        setCuisine={setCuisine}
      />

      <Grid container spacing={2} style={{ width: "100%" }}>
        <Grid item xs={12} md={9}>
          <Map
            setCoords={setCoords}
            setBounds={setBounds}
            coords={coords}
            places={filteredPlaces.length && filteredCuisines ? filteredPlaces && filteredCuisines : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <List
            places={filteredPlaces.length && filteredCuisines ? filteredPlaces && filteredCuisines : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            setRating={setRating}
            rating={rating}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
