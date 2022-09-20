

import { makeStyles } from "@material-ui/styles"


export default makeStyles(() => ({
    paper: {
        padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px',
      },
      mapContainer: {
        height: '85vh', width: '80%', marginTop: "20px"
      },
      markerContainer: {
        position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
      },
      pointer: {
        cursor: 'pointer',
      },
}))