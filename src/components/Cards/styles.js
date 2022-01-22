import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
   container: {
      maxWidth: "1100px",
      margin: "0 auto",
      display: "flex",
      flexWrap: "wrap",
   },

   cardContainer: {
      display: "flex",
      border: "1px solid #bbbbbb",
      borderRadius: "5px",
      margin: "10px",
      padding: "6px",
      width: "500px",
      "& img": {
         width: "150px",
         height: "auto",
      },
      "& h1": {
         fontSize: "16px",
         textAlign: "left",
         paddingBottom: "5px",
      },
      "& h2": {
         fontSize: "12px",
         textAlign: "left",
         paddingBottom: "10px",
      },

      "& p": {
         fontSize: "10px",
         width: "300px",
         textAlign: "left",
         lineHeight: "14px",
         paddingBottom: "10px",
      },

      "& h3": {
         fontSize: "14px",
         textAlign: "right",
      },
   },

   leftCard: {
      padding: "10px 20px",
   },

   alert: {
      width: "100%",
   },

   skeletonContainer: {
      display: "flex",
      justifyContent: "space-around",
      "& span": {
         width: "410px",
         height: "118px",
         margin: "0px 5px",
      },
   },
}));

export { useStyles };
