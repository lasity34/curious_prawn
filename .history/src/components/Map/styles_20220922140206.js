

import { blue } from "@material-ui/core/colors"
import { makeStyles } from "@material-ui/styles"


export default makeStyles(() => ({
    paper: {
        padding: '3px 5px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '7em', height: "11em" , 
      },
      mapContainer: {
        height: '85vh', width: '95%', margin: "20px auto"
      },
      markerContainer: {
        position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
      },
      pointer: {
        cursor: 'pointer', height: '5em', width: '5em', margin: '0 auto'
      },
      name: {
        textAlign: "center", marginTop: 0
      },
      mobileMap: {
          height: "40vh", margin: '0 auto' , width: '90%'
      },
      paperMobile: {
        padding: '3px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '270%', position: 'absolute'
      }
}))