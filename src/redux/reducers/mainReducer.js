import { ACTION_TYPES } from "../../helpers/const";

const initialState = {
   data: [],
   hospitalData: [],
   hospital: "",
   specializationData: [],
   specialization: "",
   loading: false,
};

const mainReducer = (state = initialState, action) => {
   switch (action.type) {
      case ACTION_TYPES.SET_LOADING:
         return {
            ...state,
            loading: action.payload,
         };
      case ACTION_TYPES.GET_DATA:
         return {
            ...state,
            data: action.payload.data,
            hospitalData: action.payload.hospitalData,
            specializationData: action.payload.specializations,
            loading: action.payload.loading,
            hospital: action.payload.hospital,
            specialization: action.payload.specialization,
         };
      case ACTION_TYPES.SEARCH_NAME:
         return {
            ...state,
            data: action.payload.data,
         };
      case ACTION_TYPES.FILTER_HOSPITAL:
         return {
            ...state,
            hospital: action.payload.hospital,
            data: action.payload.data,
            loading: action.payload.loading,
         };
      case ACTION_TYPES.FILTER_SPECIALIZATION:
         return {
            ...state,
            specialization: action.payload.specialization,
            data: action.payload.data,
            loading: action.payload.loading,
         };
      default:
         return state;
   }
};

export default mainReducer;
