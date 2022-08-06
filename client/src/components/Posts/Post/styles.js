import { makeStyles } from "@material-ui/core";

const ColorPrim = "#18191a";
const ColorGreen = "#90be3e";

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "0 16px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  cardContainer: {
    display: "flex",
    margin: "8px auto",
    position: "relative",
    minHeight: 100,
    border: "1px solid #ffffff38",
    padding: 15,
    borderRadius: 20
  },
  cardLeft: {
    "& img": {
      height: 66,
      width: 66,
      borderRadius: 50,
      boxShadow: "1px 1px 3px rgba(51, 51, 51, 0.192)",
      objectFit: "cover",

    },
  },
  cardRight: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 18,
    },
    "& p": {
      fontSize: "0.9rem",
      padding: 10,
      margin: 0,
      color: "whitesmoke",
    },
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    color: ColorGreen,
    padding: "0 10pt",
    alignItems: "center",
    fontSize: 15,
    [theme.breakpoints.down("sm")]: {
      margin: "12px 0 14px",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
    "& span": {
      fontStyle: "italic",
      fontSize: "0.8rem",
    },
  },
  pseudo: {
    display: "flex",
  },
  contenu: {
    padding: 10,
    border: "1px solid #ffffff38",
    borderRadius: 20
  },
  buttonContainer: {
    display: "flex",
    "&>div": {
      padding: "10px 10px 5px 10px",
      marginLeft: 10,
      background: ColorPrim,
      borderRadius: 25,
      transition: "0.3s",
      cursor: "pointer",
      fontSize: "1.1rem",
      color: ColorGreen,
      "&:hover": {
        transform: "scale(1.07)",
      },
    },
  },
  cardPic: {
    width: "100%",
    borderRadius: 20,
    marginTop: 12,
    boxShadow: "0 0 3px rgba(51,51,51,0.342)",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 0 4px",
    fontSize: "1.4rem",
  },
  icon: {
    cursor: "pointer",
    transition: "all 0.3s",
    color: "whitesmoke",
    "&:hover": {
      transform: "scale(1.2)",
      color: ColorGreen,
    },
    "&:hover+ span": {
      color: ColorGreen,
    },
    "&:focus": {
      boxShadow: "2px white",
    },
  },
  filled: {
    color: "rgb(192,31,31)",
    cursor: "pointer",
    transition: "all 0.3s",
    "&:hover": {
      transform: "scale(1.2)",
    },
    "&:hover+ span": {
      color: "rgb(192,31,31)",
    },
    "&:focus": {
      boxShadow: "2px white",
    },
  },
  commentIcon: {
    display: "flex",
    alignItems: "center",
    "& span": {
      fontSize: "1rem",
      transition: "all 0.3s",
      padding: "0 5px",
      color: "whitesmoke",
    },
  },
  likeIcon: {
    display: "flex",
    alignItems: "center",
    "& span": {
      fontSize: "1rem",
      transition: "all 0.3s",
      padding: "0 5px",
      color: "whitesmoke",
    },
  },
}));
