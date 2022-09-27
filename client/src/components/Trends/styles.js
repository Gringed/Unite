import { makeStyles } from "@material-ui/core";

const ColorGreen = "#90be3e";
const ColorPrim = "#18191a";
const ColorWhite = "whitesmoke";

export default makeStyles((theme) => ({
  trendingContainer: {
    background: ColorPrim,
    border:"1px solid #ffffff38",
    borderRadius: 20,
    marginBottom: 14,
    padding: 15,
    position: 'sticky',
    top: '100px',
    "& h1": {
      fontSize: "1.3rem",
      color: ColorGreen,
      margin: 5,
    },
    "& ul": {
        padding: 0,
      "& li": {
        margin: "5px 0",
        display: "flex",
        alignItems: "center",
        gridTemplateColumns: "68px 1fr",
        background: ColorPrim,
        border:"1px solid #ffffff38",
        borderRadius: 20,
        padding: 16,
        transition: ".2s",
        color: ColorWhite,
        "&:hover": {
          boxShadow: "0 0 0 5px" + ColorGreen,
          cursor: "pointer"
        },
        "& img, iframe":{
            height: 56,
            width: 56,
            borderRadius: 20,
            objectFit: "cover",
            boxShadow: "0 0 4px rgba(51, 51, 51, 0.233)",
        }
      },
    },
  },
  trendContent: {
    justifyContent: "space-between",
    display: "flex",
    width: "100%",
    marginLeft: 10,
    flexDirection: "column",
    height: 56,
    overflow: "hidden"
  },
  trendMessage:{
    display: "flex",
    alignItems: "center",
    width: "100%",
    "& img":{
        height: "30px !important",
        width: "30px !important"
    }
  },
  trendDetails:{
    
  },
  hashtag: {
    color: ColorGreen + "!important",
    fontWeight: 600,
  },
}));
