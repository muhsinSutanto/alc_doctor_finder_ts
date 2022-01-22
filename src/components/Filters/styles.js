import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
   container: {
      display: "flex",
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "40px 0px",
   },
   searchBox: {
      display: "flex",
      position: "relative",
      margin: "0px 10px !important",
      width: "280px",
   },
   dropDownBox: {
      width: "280px",
      textAlign: "left",
      marginRight: "10px !important",
   },
   placeholder: {
      color: "grey",
   },
}));

export { useStyles };
