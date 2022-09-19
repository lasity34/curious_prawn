
import React from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

const App = () => {
    return (
        <div>
            <Header />
            <List />
            <Map />
            <PlaceDetails />
        </div>
    );

}

export default App;