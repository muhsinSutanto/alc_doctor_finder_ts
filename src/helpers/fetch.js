import axios from "axios";
import { ENDPOINT } from "./const";

export const fechData = async (...param) => {
   try {
      const result = await axios(ENDPOINT.MAIN);
      return result.data.data;
   } catch (error) {
      return error;
   }
};
