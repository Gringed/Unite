import { makeStyles } from '@material-ui/core/styles';

const ColorPrim = "#18191a";
const ColorGreen = "#90be3e";
const ColorWhite = "whitesmoke";

export default makeStyles((theme) => ({
  container: {
    marginTop: '100px',
    fontSize: '10px'
},
  cardContainer: {
    display: "flex",
    margin: "8px auto",
    position: "relative",
    flexDirection: "column",
    minHeight: 100,
    border: "1px solid #ffffff38",
    padding: 15,
    borderRadius: 20,
    boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    
    "& img": {
      height: 55,
      width: 55,
      borderRadius: 50,
      boxShadow: "1px 1px 3px rgba(51, 51, 51, 0.192)",
      objectFit: "cover",
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
  },
  cardContenu: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 18,
    },
    "& p": {
      fontSize: "1rem",
      padding: "10px 0 0",
      color: ColorWhite,
      textAlign: "start"
    },
    "& span":{
      color: ColorWhite,
      fontSize: "0.8rem",
      textTransform: "capitalize",
    }
  },
  pseudo: {
    display: "flex",
    color: ColorWhite,
    fontSize: "1.1em",
    marginLeft: 10
  },
  contenu: {
    borderRadius: 20,
    wordBreak: "break-word",
    "& hr":{
      border: "1px solid #ffffff12 !important"
    }
  },
  buttonContainer: {
    display: "flex",
    width: "75%",
    justifyContent: "flex-end",
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
    boxShadow: "0 0 3px rgb(255 255 255 / 34%)",
    marginBottom: 10
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
    color: ColorGreen + "!important",
    fontWeight: 600,
  },

  // PARTIE POST SEUL
  back:{
    display: 'flex',
    alignItems: "center",
    color: ColorWhite,
    "& svg" :{
      fontSize: "2em",
      marginRight: 20,
    }
  }
}));