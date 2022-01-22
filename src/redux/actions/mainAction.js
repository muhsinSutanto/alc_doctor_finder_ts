import { ACTION_TYPES } from "../../helpers/const";
import { removeDuplicate } from "../../helpers/utils";
import { fechData } from "../../helpers/fetch";

export const getData = () => async (dispatch) => {
   dispatch({
      type: ACTION_TYPES.SET_LOADING,
      payload: true,
   });

   try {
      const data = await fechData();
      const hospitalList = removeDuplicate(data.map((item) => item.hospital[0].name));
      const specializations = removeDuplicate(data.map((item) => item.specialization.name));

      dispatch({
         type: ACTION_TYPES.GET_DATA,
         payload: {
            data: data,
            hospitalData: hospitalList,
            specializations: specializations,
            loading: false,
            hospital: "",
            specialization: "",
         },
      });
   } catch (error) {
      console.log(error);
   }
};

export const searchName = (e, data) => (dispatch) => {
   //handling if event search name is existed and else if not existed
   if (e.length !== 0) {
      const newData = data.filter((item) => {
         const name = item.name.toUpperCase();
         return name.includes(e.toUpperCase());
      });

      dispatch({
         type: ACTION_TYPES.SEARCH_NAME,
         payload: {
            data: newData,
            filteredData: [],
         },
      });
   } else {
      dispatch(getData());
   }
};

export const filterHospital = (e, specialization) => async (dispatch) => {
   //handling if event filter hospital is existed and else if not existed
   if (!!e.length) {
      dispatch({
         type: ACTION_TYPES.SET_LOADING,
         payload: true,
      });

      try {
         const data = await fechData();
         let newData;
         //handling if value on specialization is existed
         if (!specialization.length) {
            newData = data.filter((item) => {
               return item.hospital[0].name === e;
            });
         } else {
            newData = data.filter((item) => {
               return item.hospital[0].name === e && item.specialization.name === specialization;
            });
         }

         dispatch({
            type: ACTION_TYPES.FILTER_HOSPITAL,
            payload: { data: newData, hospital: e, loading: false },
         });
      } catch (error) {
         console.log(error);
      }
   } else {
      try {
         const data = await fechData();
         let newData;
         //handling if value on specialization is existed
         if (!!specialization.length) {
            newData = data.filter((item) => {
               return item.specialization.name === specialization;
            });
         } else {
            newData = data;
         }
         dispatch({
            type: ACTION_TYPES.FILTER_HOSPITAL,
            payload: { data: newData, hospital: e },
         });
      } catch (error) {
         console.log(error);
      }
   }
};

export const filterSpecializ = (e, hospital) => async (dispatch) => {
   //handling if event filter specialization is existed and else if not existed
   if (!!e.length) {
      dispatch({
         type: ACTION_TYPES.SET_LOADING,
         payload: true,
      });
      try {
         const data = await fechData();
         let newData;
         //handling if value on hospital is existed
         if (!hospital.length) {
            newData = data.filter((item) => {
               return item.specialization.name === e;
            });
         } else {
            newData = data.filter((item) => {
               return item.specialization.name === e && item.hospital[0].name === hospital;
            });
         }

         dispatch({
            type: ACTION_TYPES.FILTER_SPECIALIZATION,
            payload: { data: newData, specialization: e, loading: false },
         });
      } catch (error) {
         console.log(error);
      }
   } else {
      try {
         const data = await fechData();
         let newData;
         //handling if value on specialization is existed
         if (!!hospital.length) {
            newData = data.filter((item) => {
               return item.hospital[0].name === hospital;
            });
         } else {
            newData = data;
         }

         dispatch({
            type: ACTION_TYPES.FILTER_SPECIALIZATION,
            payload: { data: newData, specialization: e },
         });
      } catch (error) {
         console.log(error);
      }
   }
};
