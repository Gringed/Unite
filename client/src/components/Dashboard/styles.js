import { makeStyles } from "@material-ui/core";

const ColorPrim = "#18191a";
const ColorGreen = "#90be3e";
const ColorWhite = "whitesmoke";


export default makeStyles(() => ({
    appBarSearch: {
        margin: '0',
        display: 'flex',
        marginBottom: 20,
        borderRadius: 25,
        padding: "10px 20px",
        background: "none",
        border: "1px solid #ffffff38",
        "& input": {
            height: 35,
            width: "100%",
            fontSize: "1rem",
            padding: "5px 0",
            background: "none",
            border: "none",
            borderBottom: `1px solid ${ColorWhite}`,
            color: ColorWhite,
            fontFamily: "Montserrat, sans-serif",
            resize: "none",
            transition: "all 0.2s ease-in-out",
            "&:focus": {
              outline: "none",
            },
            "&:focus+ hr": {
              width: "100%",
              background: ColorGreen,
              opacity: 1,
              border: `1px solid ${ColorGreen}`,
            },
          },
          "& hr": {
            height: 2,
            width: 0,
            opacity: 0,
            position: "absolute",
            backgroundColor: "none",
            display: "block",
            transition: ".3s width ease-in-out",
            position: "relative",
            top: -7,
          },
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