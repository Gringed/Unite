import { makeStyles } from "@material-ui/core";

const ColorPrim = "#18191a";
const ColorGreen = "#90be3e";
const ColorWhite = "whitesmoke";

export default makeStyles((theme) => ({
  postContainer: {
    margin: "0 auto 0",
    padding: "16px 40px",
    borderRadius: 10,
    position: "relative",
    borderLeft: `1px solid ${ColorWhite}`,
    borderRight: `1px solid ${ColorWhite}`,
    background: ColorPrim,
    [theme.breakpoints.down("sm")]: {
      margin: "55px 0 0 0",
    },
    boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
  },
  i: {
    display: "flex",
    objectFit: "none",
    justifyContent: "center",
  },
  userInfo: {
    marginBottom: 10,
    "& img": {
      borderRadius: 20,
      height: 67,
      width: 67,
      objectFit: "cover",
    },
  },
  postForm: {
    position: "relative",
    margin: 0,
    "& textarea": {
      height: 35,
      width: "100%",
      fontSize: "1rem",
      padding: "12px 0",
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
      top: -10,
    },
  },
  cardContainer: {
    background: "none",
    borderRadius: "20px 20px 6px 20px",
    display: "flex",
    border: `1px solid $color-2`,
    marginBottom: 10,
  },
  cardLeft: {
    "& img": {
      height: 67,
      width: 67,
      borderRadius: 35,
      boxShadow: "1px 1px 3px rgba(51, 51, 51, 0.192)",
      objectFit: "cover",
    },
  },
  cardRight: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    color: ColorWhite,
    padding: "5px 17px",
    fontSize: "1rem",
    alignItems: "center",

    "& span": {},
  },
  content: {
    padding: "0 17px",
    "& p": {
      textAlign: "left",
      margin: "2px 0 6px",
      fontSize: "1.1rem",
      color: ColorWhite,
      wordBreak: "break-word",
    },
    "& img": {
      width: "100%",
      borderRadius: 6,
      marginTop: 12,
    },
  },
  footerForm: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 auto",
    width: "100%",
    "& p": {
      fontFamily: "Montserrat, sans-serif",
      marginTop: 4,
      color: "red",
    },
  },
  icon: {
    position: "relative",
    cursor: "pointer",
    width: 30,
    height: 30,
    fontSize: "2.1rem",
    color: ColorGreen,
    transition: "0.2s",

    "& img": {
      position: "absolute",
      height: 24,
      width: 24,
      transform: "translate(-18px, -1px)",
    },

    "& input": {
      width: 30,
      height: 30,
      position: "absolute",
      transform: "translate(0px, -40px)",
      opacity: 0,
      cursor: "pointer",

      "&::-webkit-file-upload-button": {
        cursor: "pointer",
      },
    },
    "&:hover": {
      transform: "scale(1.1)",
      transition: "0.2s",
      color: ColorWhite,
    },
  },

  btnSend: {
    "& button": {
      fontWeight: 600,
      padding: "10px 20px",
      background: ColorPrim,
      color: ColorWhite,
      border: `1px solid ${ColorWhite}`,
      borderRadius: 50,
      transition: "0.2s",
      fontFamily: "Montserrat, sans-serif",
      marginLeft: 5,
      cursor: "pointer",
      "&:hover": {
        background: ColorGreen,
        color: ColorPrim,
        border: `1px solid ${ColorPrim}`,
        fontWeight: 600,
      },
    },
  },
  disabled: {
    opacity: 0.5,
    cursor: "default !important",
    color: "red !important",
    border: `1px solid red !important`,
    "&:hover": {
      background: "none !important",
    },
  },
  caracmax: {
    color: "whitesmoke",
    fontSize: "0.7rem",
    margin: 20,
  },
  hashtag: {
    color: ColorGreen,
    fontWeight: 600,
  },
}));
