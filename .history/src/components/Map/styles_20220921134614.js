

import { makeStyles } from "@material-ui/styles"


export default makeStyles(() => ({
    paper: {
        padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px', height: "50px"
      },
      mapContainer: {
        height: '85vh', width: '95%', margin: "20px auto"
      },
      markerContainer: {
        position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
      },
      pointer: {
        cursor: 'pointer', height: '2em'
      },
      mobileMap: {
          height: "70vh", margin: '2em auto', width: '95%'
      },
      paperMobile: {
        padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px'
      }
}))