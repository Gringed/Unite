import { makeStyles } from "@material-ui/styles";

const ColorWhite = "whitesmoke";
const ColorGreen = "#90be3e";

export default makeStyles(() => ({
  progressBar:{
    background: ColorGreen,
    "&>div":{
      background: '#18191a'
    }
  },
  container: {
    marginTop: 20,
  },
  infinite: {
    width: "100%",
  },
  empty: {
    color: ColorWhite,
  },
  actionDiv: {
    textAlign: "center",
  },
}));
