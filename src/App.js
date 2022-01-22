import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getData } from "./redux/actions/mainAction";
import Filter from "./components/Filters";
import Cards from "./components/Cards";

function App() {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getData());
   }, []);

   return (
      <div className="App">
         <Filter />
         <Cards />
      </div>
   );
}

export default App;
