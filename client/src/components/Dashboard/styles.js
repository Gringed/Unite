import { makeStyles } from "@material-ui/core";

const ColorPrim = '#18191a'
const ColorGreen = '#90be3e'


export default makeStyles(() => ({
    appBarSearch: {
        margin: '0',
        display: 'flex',
        marginBottom: 10,
        borderRadius: 4,
        padding: 16
    },
    heading: {
        fontFamily: 'Montserrat, sans-serif'
    },
    image: {
        margin: '10px'
    },
    container: {
        marginTop: '100px',
        fontSize: '10px'
    },
    hashtag:{
        color: "red"
    }
}))