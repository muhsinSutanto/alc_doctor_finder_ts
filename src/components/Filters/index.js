import { Select, TextField, MenuItem } from "@mui/material";
import Placeholder from "../PlaceHolder";
import { useStyles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { searchName, filterHospital, filterSpecializ } from "../../redux/actions/mainAction";
import { FormControl } from "@material-ui/core";

const Filter = () => {
   const classes = useStyles();
   const dispatch = useDispatch();
   const state = useSelector((state) => state);

   const handleChageSearch = (e, data) => {
      dispatch(searchName(e.target.value, data));
   };

   const handleSelectHospital = (e) => {
      dispatch(filterHospital(e.target.value, state.specialization));
   };

   const handleSelectSpec = (e) => {
      dispatch(filterSpecializ(e.target.value, state.hospital));
   };

   return (
      <div className={classes.container}>
         <FormControl className={classes.searchBox}>
            <TextField
               onKeyUp={(e) => handleChageSearch(e, state.data)}
               required
               id="outlined-required"
               placeholder="Search doctor"
            />
         </FormControl>
         <FormControl className={classes.dropDownBox}>
            <Select
               id="outlined-select-currency"
               value={state.hospital}
               onChange={handleSelectHospital}
               displayEmpty
               renderValue={
                  state.hospital !== "" ? undefined : () => <Placeholder>Hospital</Placeholder>
               }
            >
               <MenuItem style={{ color: "grey" }} value="">
                  Show all
               </MenuItem>
               {state.hospitalData.map((item) => (
                  <MenuItem key={item} value={item}>
                     {item}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
         <FormControl className={classes.dropDownBox}>
            <Select
               id="outlined-select-currency"
               value={state.specialization}
               onChange={handleSelectSpec}
               displayEmpty
               renderValue={
                  state.specialization !== ""
                     ? undefined
                     : () => <Placeholder>Specialization</Placeholder>
               }
            >
               <MenuItem style={{ color: "grey" }} value="">
                  Show all
               </MenuItem>
               {state.specializationData.map((item) => (
                  <MenuItem key={item} value={item}>
                     {item}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
      </div>
   );
};

export default Filter;
