import { makeStyles } from "@material-ui/core";

const ColorPrim = "#18191a";
const ColorGreen = "#90be3e";
const ColorWhite = "whitesmoke";

export default makeStyles((theme) => ({
  // POST ET AFFICHAGE
  cardAction: {
    display: "block",
  },
  cardContainer: {
    display: "flex",
    margin: "8px auto",
    position: "relative",
    minHeight: 100,
    border: "1px solid #ffffff38",
    padding: 15,
    borderRadius: 20,
    boxShadow:
      "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
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
      textAlign: "start",
      whiteSpace: 'pre-line'
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
    borderRadius: 20,
    wordBreak: "break-word",
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
    maxHeight: 525,
    objectFit: "cover",
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
  hashtag: {
    color: ColorGreen,
    fontWeight: 600,
  },

  // COMMENTAIRES DU POST
  commentForm: {
    marginTop: "15px !important",
    display: "flex",
    "& input[type='text']": {
      width: "100%",
      background: "none",
      borderRadius: 20,
      border: "1px solid " + ColorWhite,
      padding: 10,
      fontSize: "1rem",
      color: ColorWhite,
      transition: "all 0.2s ease-in-out",
      "&:focus": {
        boxShadow: "0 0 2px 2px rgb(144 190 62)",
        outline: "none",
        border: "1px solid transparent"
      },
    },
    "& button": {
      padding: 10,
      width: 60,
      background: ColorWhite,
      borderRadius: "20px 6px 20px 20px",
      transition: "0.2s",
      border: ColorWhite,
      marginLeft: 10,
      position: "relative",
      overflow: "hidden",
      zIndex: 0,
      cursor: "pointer",
      "&::before": {
        content: "''",
        position: "absolute",
        top: 60,
        left: 0,
        width: "100%",
        height: "100%",
        background: ColorGreen,
        borderRadius: "50% 50% 0% 0%",
        zIndex: "-1",
        transition: "all .5s",
      },
      "&:hover::before": {
        top: 0,
        borderRadius: 0,
        color: ColorWhite
      },
    },
  },
  commentContainerClient: {
    border: "1px solid" + ColorGreen,
    borderRadius: 20,
  },
  commentContainer: {
    display: "flex",
    border: "1px solid" + ColorGreen,
    padding: 15,
    margin: "5px 0",
    borderRadius: "20px 20px 20px 6px",
  },
  leftPart:{
    "& img": {
      height: 40,
      width: 40,
      borderRadius: 25,
      boxShadow: "1px 1px 3px rgba(51, 51, 51, 0.192)",
          objectFit: "cover",
    }
  }
}));
