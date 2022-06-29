import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App(props) {
  return (

      <Fragment>
        <MainHeader/>
        <main>
        <Routes>
          <Route path="/welcome"  element={<Welcome/>}/>
          <Route path="/products" element={<Products/>}/> 
        </Routes>
        </main>
      </Fragment>
    
  );
}

export default App;
