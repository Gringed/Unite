import { makeStyles } from "@material-ui/core";

const ColorPrim = "#18191a";
const ColorGreen = "#90be3e";
const ColorWhite = "whitesmoke";

export default makeStyles((theme) => ({
  footerContainer: {
    display: "flex",
    position: "sticky",
    flexDirection: "column",
    top: 681,
    "& ul": {
      display: "flex",
      listStyle: "none",
      justifyContent: "center",
      padding: 0,
      "& li": {
        padding: '0 10px',
        "& a": {
          color: ColorWhite,
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            textDecoration: "underline",
            color: ColorGreen,
          },
        },
      },
    },
  },
  footerName: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    color: ColorWhite,
    fontWeight: 'bold',
    "& span":{
        padding: '0 5px',
        color: ColorGreen,
    }
  },
}));
