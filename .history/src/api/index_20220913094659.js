import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'



export const getPlacesData = async ( sw,ne ) => {


  // const oldApiKey = 'f70f3e4e3emsh93c97efeb09ac9fp190a5cjsne96c71c731c8'

  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      method: 'GET',
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_latitude: ne.lat,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Key': '5e463621dbmshb34bb9a9a64b319p1d6113jsn5a76a724b636',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });


    return data;
  } catch (error) {
    console.log(error);
  }
};


