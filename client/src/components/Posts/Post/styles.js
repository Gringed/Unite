import { makeStyles } from "@material-ui/core";

const ColorPrim = '#18191a'
const ColorGreen = '#90be3e'


export default makeStyles(() => ({
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
      },
      border: {
        border: 'solid',
      },
      fullHeightCard: {
        height: '100%',
      },
      card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
      },
      overlay: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
      },
      overlay2: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white',
      },
      grid: {
        display: 'flex',
      },
      details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
      },
      title: {
        padding: '0 16px',
      },
      cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
      },
      cardContainer: {
        display: 'flex',
    border: `1px solid ${ColorPrim}` ,
    padding: 16,
    borderRadius: 20,
    margin: "8px auto",
    position: "relative",
    minHeight: 100
      },
      cardLeft: {
        '& img':{
          height: 67,
        width: 67,
        borderRadius: "25px 0 0 0",
        boxShadow: "1px 1px 3px rgba(51, 51, 51, 0.192)",
        objectFit: 'cover',
        border: `2px solid ${ColorGreen}`,
        }
      }
}))