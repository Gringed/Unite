import { makeStyles } from "@material-ui/core";

const ColorPrim = "#18191a";
const ColorGreen = "#90be3e";

export default makeStyles((theme) => ({
  logContainer: {
    color: "whitesmoke",
    margin: "80px auto 0",
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: 1,
    },
  },
  connectionForm: {
    border: `2px solid ${ColorGreen}`,
    margin: 0,
    padding: 20,
    textAlign: "center",
    borderRadius: 40,
    [theme.breakpoints.down("xs")]: {},
  },
  formContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& ul": {
      listStyle: "none",
      "& li": {
        background: ColorGreen,
        color: "white",
        padding: "10px 20px",
        borderRadius: 20,
        cursor: "pointer",
        transition: "0.3s",
        margin: 20,
        border: "1px solid" + ColorPrim,
        "&::marker": {
          color: ColorGreen,
          fontSize: "x-large",
        },
      },
      "& .active-btn": {
        background: ColorPrim,
        transform: "translateX(-45%)",
        listStyle: "decimal",
        listStyleType: "disclosure-closed",
      },
      "& li:not(.active-btn)": {
        "&:hover": {
          background: ColorPrim,
          border: "1px solid" + ColorGreen,
        },
      },
    },
    "& form": {
      display: "flex",
      flexDirection: "column",
      "& input": {
        padding: 10,
        border: "none",
        fontSize: "1rem",
        margin: "10px 0",
        borderRadius: 20,
        transition: "0.3s",
        width:'inherit',
        "&:focus": {
          boxShadow: "0 0 2px 4px rgb(144 190 62)",
        },
        "&:focus-visible": {
          outline: "none",
        },
      },
      '& input[type="submit"]': {
        background: ColorGreen,
        color: "white",
        transition: "0.3s",
        cursor: "pointer",
        border: "1px solid" + ColorPrim,
        "&:hover": {
          background: ColorPrim,
          color: "white",
          border: "1px solid" + ColorGreen,
        },
      },
    },
  },
  imgContainer: {
    display: "flex",
    alignItems: "center",
  },
  inputShowPass: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width:'100%',
    "& input": {
      borderRadius: "20px 0 0 20px !important",
    },
  },
  eyeIcon: {
    color: ColorPrim,
    cursor: "pointer",
    fontSize: "1.1rem",
    background: ColorGreen,
    padding: 10,
    borderRadius: "0 20px 20px 0",
    border: "1px solid" + ColorPrim,
  },
  submitContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 15,
  },
  googleButton: {
    borderRadius: "20px !important",
    background: ColorGreen,
    color: "white",
    transition: "0.3s",
    cursor: "pointer",
    border: "1px solid" + ColorPrim,
    justifyContent: "center !important",
    "&>div": {
      borderRadius: "20px !important",
    },
    "&:hover": {
      background: ColorPrim,
      color: "white",
      border: "1px solid" + ColorGreen,
    },
  },
  error:{
    color: 'red',
    padding: 10
  }
}));
