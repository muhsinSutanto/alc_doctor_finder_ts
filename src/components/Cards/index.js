import React from "react";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import { Skeleton, Alert } from "@mui/material";

const Cards = () => {
   const classes = useStyles();
   const state = useSelector((state) => state);

   return (
      <div className={classes.container}>
         {!!state.loading ? (
            <div className={classes.skeletonContainer}>
               <Skeleton variant="rectangular" animation="wave" />
               <Skeleton variant="rectangular" animation="wave" />
            </div>
         ) : !!state.data.length ? (
            state.data.map((item) => (
               <div className={classes.cardContainer}>
                  <div>
                     <img alt="doctor_img" src={item.photo.formats.small} />
                  </div>
                  <div className={classes.leftCard}>
                     <h1>{item.name}</h1>
                     <h2>
                        {item.hospital[0].name} - {item.specialization.name}
                     </h2>
                     <div>
                        <p dangerouslySetInnerHTML={{ __html: item.about_preview }} />
                     </div>
                     <h3>{item.price.formatted}</h3>
                  </div>
               </div>
            ))
         ) : (
            <Alert className={classes.alert} severity="error">
               Maaf data tidak ditemukan
            </Alert>
         )}
      </div>
   );
};

export default Cards;
