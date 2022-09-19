import axios from "axios";


export const getPlacesData = async (type, sw,ne ) => {


  // const oldApiKey = 'f70f3e4e3emsh93c97efeb09ac9fp190a5cjsne96c71c731c8'

  try {
    const {
      data: { data },
    } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_latitude: ne.lat,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Key': '459c7b677cmsh54b5f9483981791p176480jsn4cd9fec5bdce',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });


    return data;
  } catch (error) {
    console.log(error);
  }
};


