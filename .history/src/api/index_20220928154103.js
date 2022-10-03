import axios from "axios";


export const getPlacesData = async (cuisine, sw,ne ) => {


  // const oldApiKey = 'f70f3e4e3emsh93c97efeb09ac9fp190a5cjsne96c71c731c8'
  // 459c7b677cmsh54b5f9483981791p176480jsn4cd9fec5bdce ronelbester
  // 9170ca8607msh094266e3c22a4f7p157dd1jsn15fbf4bc6feb bjornworrall1989
  // 4bba85004bmsh9192ed5c2848e09p1443c3jsn1b5d028113fd lasity1989@gmail.com
 let str = cuisine.toString()
  
  try {
    const {
      data: { data },
    } = await axios.get('https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary', {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_latitude: ne.lat,
        tr_longitude: ne.lng,
        combined_food: str 
      },
      headers: {
        'X-RapidAPI-Key': '57f0bec381mshb8496907c01bfc3p1b35abjsn7aa8b2fffd4d',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });


    return data;
  } catch (error) {
    console.log(error);
  }
};


export const getGeoData = ({lat, lng}) => {
  try {
    const data = axios(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500`)
    .then(res => res.json())
    .then(data => console.log(data))
    return data
  } catch (error) {
    console.log(error)
  }
}


