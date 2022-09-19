import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getPlacesData = async ( sw, ne) => {
    try {
        const { data: { data }} = await axios.get(URL, {
          method: 'GET',
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
         
          },
          headers: {
            'X-RapidAPI-Key': 'f70f3e4e3emsh93c97efeb09ac9fp190a5cjsne96c71c731c8',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        })

        return data
    } catch (error) {
        console.log(error)
    }
}