import axios from "axios";


export const getPlacesData = async (dietry, cuisine, sw,ne ) => {



 let str = cuisine.toString()
  let diet = dietry.toString()

  try {
    const {
      data: { data },
    } = await axios.get('https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary', {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_latitude: ne.lat,
        tr_longitude: ne.lng,
        combined_food: str ,
        dietary_restrictions: diet
      },


      headers: {
        // 'X-RapidAPI-Key': process.env.REACT_APP_TRAVEL_ADVISOR_API_KEY,
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
 
    });


    return data;
  } catch (error) {
    console.log(error);
  }
};





  

