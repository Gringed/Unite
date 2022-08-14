import { makeStyles } from "@material-ui/core/styles";

const ColorPrim = "#18191a";
const ColorGreen = "#90be3e";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  input: {},
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
    background: ColorPrim,
    color: "white",
    boxShadow: `0px 5px 2px 0px ${ColorGreen}`,
    transition:
      "all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;",
    "&:hover": {
      background: ColorGreen,
      color: ColorPrim,
    },
  },
}));
