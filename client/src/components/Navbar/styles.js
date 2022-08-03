import { makeStyles } from "@material-ui/core";

const ColorPrim = '#18191a'
const ColorGreen = '#90be3e'
const ColorWhite = 'whitesmoke'


export default makeStyles((theme) => ({
    appBar: {
        margin: '0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: ColorPrim,
        borderBottom: `5px solid ${ColorGreen}`,
        padding: '0 80px',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            padding: 0
          },
    },
      heading: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '2em',
        fontWeight: 500,
        textDecoration: 'none'
      },
      image: {
      },
      toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: 300,
        [theme.breakpoints.down('sm')]: {
          width: 'auto',
        },
      },
      profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {

          justifyContent: 'space-evenly',
        },
      },
      logout: {
        marginLeft: 20,
        fontWeight: 600,
      padding: "10px 20px",
      background: ColorPrim,
      color: ColorWhite,
      border: `1px solid ${ColorWhite}`,
      borderRadius: 50,
      transition: "0.2s",
      fontSize: 11,
      fontFamily: "Montserrat, sans-serif",
      cursor: "pointer",
      "&:hover": {
        background: ColorGreen,
        color: ColorPrim,
        border: `1px solid ${ColorPrim}`,
        fontWeight: 600,
      },
      },
      userName: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
      },
      brandContainer: {
        display: 'flex',
        alignItems: 'center',
      },
      avatar: {
        color: theme.palette.getContrastText(ColorPrim),
        backgroundColor: ColorGreen,
      },
}))