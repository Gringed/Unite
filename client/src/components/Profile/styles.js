import { makeStyles } from "@material-ui/core";

const ColorGreen = "#90be3e";
const ColorWhite = "whitesmoke";

export default makeStyles((theme) => ({
    container: {
        marginTop: "100px",
        [theme.breakpoints.down("xs")]: {
          marginTop: '160px !important',
        },
        fontSize: "10px",
      },
      links:{
        display: 'flex',
        width: 'max-content'
      },
      back: {
        display: "flex",
        alignItems: "center",
        color: ColorWhite,
        "& svg": {
          fontSize: "2em",
          marginRight: 20,
        },
      },
}));
