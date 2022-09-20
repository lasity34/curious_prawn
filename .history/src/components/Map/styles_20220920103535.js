

import { makeStyles } from "@material-ui/styles"


export default makeStyles(() => ({
    paper: {
        padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px',
      },
      mapContainer: {
        height: '85vh', width: '90%', margin: "20px auto"
      },
      markerContainer: {
        position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
      },
      pointer: {
        cursor: 'pointer',
      },
}))