import axios from "axios";


export const getPlacesData = async (cuisine, sw,ne ) => {


  // const oldApiKey = 'f70f3e4e3emsh93c97efeb09ac9fp190a5cjsne96c71c731c8'
  // 459c7b677cmsh54b5f9483981791p176480jsn4cd9fec5bdce ronelbester
  // 9170ca8607msh094266e3c22a4f7p157dd1jsn15fbf4bc6feb bjornworrall1989
  // 4bba85004bmsh9192ed5c2848e09p1443c3jsn1b5d028113fd
 console.log(cuisine)
  
  try {
    const {
      data: { data },
    } = await axios.get('https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary', {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_latitude: ne.lat,
        tr_longitude: ne.lng,
        combined_food: JSON.stringify(cuisine.key)
      },
      headers: {
        'X-RapidAPI-Key': '4bba85004bmsh9192ed5c2848e09p1443c3jsn1b5d028113fd',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });


    return data;
  } catch (error) {
    console.log(error);
  }
};


