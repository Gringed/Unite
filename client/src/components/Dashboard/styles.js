import { makeStyles } from "@material-ui/styles";

const ColorPrim = '#18191a'
const ColorGreen = '#90be3e'


export default makeStyles(() => ({
    appBar: {
        margin: '0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        background: ColorPrim,
        borderBottom: `5px solid ${ColorGreen}`
    },
    heading: {
        fontFamily: 'Montserrat, sans-serif'
    },
    image: {
        margin: '10px'
    },
    container: {
        marginTop: '80px',
        fontSize: '10px'
    }
}))