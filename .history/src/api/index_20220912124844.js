import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
  method: 'GET',
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
 
  },
  headers: {
    'X-RapidAPI-Key': 'f70f3e4e3emsh93c97efeb09ac9fp190a5cjsne96c71c731c8',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

export const getPlacesData = async ( sw, ne) => {
    try {
        const { data: { data }} = await axios.get(URL, options)

        return data
    } catch (error) {
        console.log(error)
    }
}