import Bags from "./pages/bags";
import Home from "./pages/home";
import New from "./pages/new";
import Backpacs from "./pages/Backpacs";
import Cosmetic from "./pages/Cosmetic";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Order from "./pages/Order";
import { createContext, useState } from "react";
import Shop from "./pages/components/shop";
  export var Mydata=createContext()
var App=()=>{
   var [cart,setCart]=useState([])
  return(
    <>
    <Mydata.Provider value={{cart,setCart}}>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/new" element={<New/>}/>
          <Route path="/bags" element={<Bags/>}/>
          <Route path="/backpacs" element={<Backpacs/>}/>
          <Route path="/cosmetic" element={<Cosmetic/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/order" element={<Order/>}/>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="*" element={<Home/>}/>
          
        </Routes>
      </BrowserRouter> 
      </Mydata.Provider>
   
    </>
  ) 
}

export default App;