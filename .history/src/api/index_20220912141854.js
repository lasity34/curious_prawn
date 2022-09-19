import axios from "axios";


const URL = 'https://travel-advisor.p.rapidapi.com/locations/v2/list-nearby'

const options = {
  method: 'POST',
  params: {currency: 'USD', units: 'km', lang: 'en_US'},
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'f70f3e4e3emsh93c97efeb09ac9fp190a5cjsne96c71c731c8',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  },
  data: '{"contentId":"cc8fc7b8-88ed-47d3-a70e-0de9991f6604","contentType":"restaurant","filters":[{"id":"placetype","value":["hotel","attraction","restaurant"]},{"id":"minRating","value":["30"]}],"boundingBox":{"northEastCorner":{"latitude":12.248278039408776,"longitude":109.1981618106365},"southWestCorner":{"latitude":12.243407232845051,"longitude":109.1921640560031}}}'
};

export const getPlacesData = async () => {


  try {
    const {
      data: { data },
    } = await axios.get(URL, options);

    return data;
  } catch (error) {
    console.log(error);
  }
};
