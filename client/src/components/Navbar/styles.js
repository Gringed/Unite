import { makeStyles } from "@material-ui/core";

const ColorPrim = "#18191a";
const ColorGreen = "#90be3e";
const ColorWhite = "whitesmoke";

export default makeStyles((theme) => ({
  appBar: {
    margin: "0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    background: ColorPrim,
    borderBottom: `5px solid ${ColorGreen}`,
    padding: "0 80px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  appBarContainer: {
    margin: "0",
    display: "flex",
    width: "100%",
    maxWidth: "1280px",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexDirection: 'column',
      alignItems: 'center'
    },
  },
  heading: {
    color: "white",
    textDecoration: "none",
    fontSize: "2em",
    fontWeight: 500,
  },
  image: {},
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "end",
    },
    "&>a": {
      textDecoration: "none",
      color: ColorWhite,
      display: "flex",
      alignItems: "center",
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
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "Montserrat",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
    padding: '0 24px',
    "& h1":{
      margin: '12px 0'
    },
  },
  avatar: {
    color: theme.palette.getContrastText(ColorPrim),
    boxShadow: "0px 0px 3px 0px rgb(0 0 0 / 70%)",
    margin: 10,
  },
}));
