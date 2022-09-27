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
    [theme.breakpoints.down("sm")]: {
      padding: 5,
    },
    boxShadow:
      "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
  },
  cardLeft: {
    paddingTop: 5,
    "& img": {
      height: 50,
      width: 50,
      borderRadius: 50,
      boxShadow: "1px 1px 3px rgba(51, 51, 51, 0.192)",
      objectFit: "cover",
    },
  },
  cardRight: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    "& p": {
      fontSize: "0.9rem",
      padding: 10,
      margin: 0,
      color: "whitesmoke",
      textAlign: "start",
      whiteSpace: "pre-line",
    },
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    color: ColorGreen,
    padding: "15px 5px 10px 10px",
    alignItems: "center",
    fontSize: 15,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
    "& span": {
      fontStyle: "italic",
      fontSize: "0.8rem",
      flex: 1,
      textAlign: 'end'
    },
    "& a": {
      color: ColorGreen,
      height: 'auto',
      "&:hover":{
        textDecoration: 'underline'
      }
    },
  },
  pseudo: {
    display: "flex",
    "& h3": {
      margin: 0,
      fontSize: '0.9rem'
    }
  },
  contenu: {
    padding: 10,
    border: "1px solid #ffffff38",
    borderRadius: 20,
    wordBreak: "break-word",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: 'flex-end',
    "&>div": {
      display: 'flex',
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
      fontSize: "0.7rem",
      transition: "all 0.3s",
      padding: "0 5px",
      color: "whitesmoke",
    },
  },
  likeIcon: {
    display: "flex",
    alignItems: "center",
    "& span": {
      fontSize: "0.7rem",
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
    margin: "15px 0 !important",
    display: "flex",
    "& input[type='text']": {
      width: "100%",
      background: "none",
      border: 'none',
      borderBottom: "1px solid " + ColorWhite,
      padding: '10px 0',
      fontSize: "1rem",
      color: ColorWhite,
      transition: "all 0.2s ease-in-out",
      "&:focus": {
        outline: "none",
        borderBottom: "1px solid " + ColorGreen,
      },
    },
    "& button": {
      padding: 10,
      width: 60,
      background: 'none',
      borderRadius: "20px 20px 0 0",
      transition: "0.2s",
      borderBottom: '1px solid '+ ColorWhite,
      border: "none",
      marginLeft: 10,
      position: "relative",
      overflow: "hidden",
      zIndex: 0,
      cursor: "pointer",
      color: ColorWhite,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'x-large',
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
        color: ColorWhite,
      },
    },
  },
  commentContainer: {
    display: "flex",
    boxShadow: '0px 0px 3px 2px #00000080',
    padding: 15,
    margin: "10px 0",
    borderRadius: 20,
  },
  leftPart: {
    "& img": {
      height: 40,
      width: 40,
      borderRadius: 25,
      boxShadow: "1px 1px 3px rgba(51, 51, 51, 0.192)",
      objectFit: "cover",
    },
  },
  rightPart: {
    "& p": {
      wordBreak: "break-word",
    },
  },
  commentHeader: {
    display: "flex",
    margin: '2px 10px 5px',
    color: ColorWhite,
    flexDirection: 'column'
  },
  commentPseudo: {
    display: "flex",
    alignItems: "center",
    "& a": {
      color: ColorGreen,
      height: 'auto',
      "&:hover":{
        textDecoration: 'underline'
      }
    },
    "& h3":{
      margin: 0,
      fontSize: 14
    },
    "& span": {
      fontSize: "0.9rem",
      margin: "0 0 0 3px",
    },
  },
  commentFooter: {
    "& span": {
      color: ColorWhite,
      display: 'flex',
      justifyContent: 'flex-end'
    },
  },
}));
