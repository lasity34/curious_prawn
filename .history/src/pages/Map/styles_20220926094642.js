


import { makeStyles } from "@material-ui/styles"


export default makeStyles(() => ({
    paper: {
        padding: '3px 5px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '5.5em', height: "8em" , 
      },
      mapContainer: {
        height: '85vh', width: '98%', margin: "10px auto"
      },
      markerContainer: {
        position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
      },
      pointer: {
        cursor: 'pointer', height: '3em', width: '3em', margin: '0 auto'
      },
      name: {
        textAlign: "center", marginTop: 0, fontSize: '0.7rem'
      },
      mobileMap: {
          height: "40vh", margin: '0 auto' , width: '98%'
      },
      paperMobile: {
        padding: '3px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '270%', position: 'absolute'
      }
}))