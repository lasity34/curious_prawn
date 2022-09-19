import axios from "axios";

 


export const getPlacesData = async ( sw, ne) => {
    try {
        const { data: { data }} = await axios.get('https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary', {

          params: {
            bl_latitude: sw.lat,
            bl_longitude: sw.lng,
            tr_latitude: ne.lat,
            tr_longitude: ne.lng,
         
          },
          headers: {
            'X-RapidAPI-Key': 'f70f3e4e3emsh93c97efeb09ac9fp190a5cjsne96c71c731c8',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          },
        })

        return data
    } catch (error) {
        console.log(error)
    }
}