import { makeStyles } from "@material-ui/core";

const ColorGreen = "#90be3e";
const ColorWhite = "whitesmoke";

export default makeStyles((theme) => ({
  progressBar: {
    background: ColorGreen,
    "&>div": {
      background: "#18191a",
    },
  },
  container: {
    marginTop: "100px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "160px !important",
    },
    fontSize: "10px",
  },
  links: {
    display: "flex",
    width: "max-content",
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

  //PROFILE
  profileContainer: {},
  profileInfos: {},
  profileAvatar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: 'wrap',
    "& button": {
      color: ColorWhite,
      fontFamily: "Montserrat",
      border: `1px solid ${ColorWhite}`,
      padding: 10,
      borderRadius: 50,
    },
  },
  profileAvatarImg:{
    width: 150,
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    "& img": {
      objectFit: "cover",
      width: "100%",
      borderRadius: "50%",
      border: "2px solid transparent",
      boxShadow: "0 0 0 2px" + ColorGreen,
    },
    
  },
  profileInfosId: {
    display: "flex",
    flexDirection: "column",
    color: ColorWhite,
    "& h1": {
      margin: "15px 0 0 0",
    },
    "& span": {
      fontStyle: "italic",
      opacity: 0.6,
      fontSize: 11,
    },
  },
  profileInfosBio: {
    marginTop: 20,
    color: ColorWhite,
    "& button": {
      color: ColorWhite,
      fontFamily: "Montserrat",
      textAlign: "left",
    },
    "& span": {
      fontStyle: "italic",
      fontSize: 12,
    },
  },
  profileInfosOthers: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 10,
    color: ColorWhite,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    "& svg": {
      color: ColorGreen,
      fontSize: "medium",
      marginRight: 10,
    },
    "& span": {
      fontSize: 12,
      display: "flex",
      alignItems: "center",
    },
  },
  profileInfosFollows: {
    display: "flex",
    marginTop: 10,
    color: ColorWhite,
    "& button": {
      fontFamily: "Montserrat",
      marginRight: 30,
      fontWeight: 600,
    },
    "& span": {
      marginLeft: 5,
      opacity: 0.6,
      fontWeight: "normal",
    },
  },
  profilePost: {
    marginTop: 20,
    "& h1": {
      padding: "10px 0",
      margin: 0,
      fontSize: 17,
      color: ColorWhite,
      borderBottom: "2px solid" + ColorGreen,
      width: "fit-content",
    },
    "& hr": {
      opacity: 0.1,
      margin: "1px 0",
    },
  },

  //MODIFICATION PROFIL
  profileDialog: {
    "& .MuiPaper-root": {
      background: "black",
      color: ColorWhite,
    },
    "& .MuiDialog-paper": {
      margin: 0,
    },
    "& .MuiDialog-paperWidthSm": {
      width: "100%",
    },
    "& .MuiPaper-rounded": {
      borderRadius: 20,
    },
  },
  profileDialogTitle: {
    "& h2": {
      fontFamily: "Montserrat",
    },
  },
  profileAvatarModif: {
    display: "flex",
  },
  avatar: {
    border: "5px solid transparent",
    boxShadow: "0 0 2px 2px" + ColorGreen,
    width: 65,
    height: 65,
    opacity: 0.5,
  },
  small: {
    border: "2px solid black",
    borderRadius: 50,
    padding: 5,
    background: ColorGreen,
    color: "black",
    fontSize: 15,
  },
  fileInput: {
    "& input": {
      width: 30,
      height: 25,
      position: "absolute",
      transform: "translate(-30px, -12px)",
      opacity: 0,
      cursor: "pointer",

      "&::-webkit-file-upload-button": {
        cursor: "pointer",
      },
    },
  },
  profileBioModif: {
    marginTop: 30,
    fontFamily: "Montserrat",
    display: "flex",
    flexDirection: "column",
    "& span": {
      fontSize: 13,
      margin: "5px 0",
    },
    "& textarea": {
      height: 45,
      width: "-webkit-fill-available",
      fontSize: "0.8rem",
      background: "none",
      padding: "10px 5px",
      color: ColorWhite,
      fontFamily: "Montserrat, sans-serif",
      resize: "none",
      transition: "all 0.2s ease-in-out",
      "&:focus": {
        border: `1px solid ${ColorGreen}`,
        outline: "none",
      },
    },
  },
  hashtag: {
    color: ColorGreen,
    fontWeight: 600,
  },
}));
