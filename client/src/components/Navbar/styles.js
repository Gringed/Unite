import { makeStyles } from "@material-ui/core";

const ColorPrim = '#18191a'
const ColorGreen = '#90be3e'


export default makeStyles((theme) => ({
    appBar: {
        margin: '0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        background: ColorPrim,
        borderBottom: `5px solid ${ColorGreen}`,
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
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
        width: '400px',
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
          width: 'auto',
          marginTop: 20,
          justifyContent: 'center',
        },
      },
      logout: {
        marginLeft: '20px',
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