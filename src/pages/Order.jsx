import { useLocation, useNavigate } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import { useContext } from "react";
import { Mydata } from "../App";

var newdata=[
    {
        "name":"Bag Sandra",
        "price":80,
        "image":"./products/06.png"
    },
    {
        "name":"Bag Jenny",
        "price":60,
        "image":"./products/06.png"
    },
    {
        "name":"Bag Catherine",
        "price":60,
        "image":"./products/07.png"
    },
    {
        "name":"Bag Mary",
        "price":30,
        "image":"./products/08.png"
    },
]
var Order=()=>{

    var product=useLocation()
    var {cart,setCart}=useContext(Mydata)
    var AddItem=(temp)=>{
        
        var xyz=[...cart]
        temp['qty']=1
        xyz.push(temp)
        setCart(xyz)
        alert("Add to Shopping Card !")

    }
    var navigate=useNavigate()
    return(
        <>
         
     <Header/>
     <div className="flex flex-col justify-center items-center">
        <div className="flex gap-10 w-[80vw] pt-10"> 
            <div className=" flex-1 flex justify-center items-center">
                <img src={product.state.image} alt=""  className="w-80 bg-gray-100"/>
            </div>
            <div className="flex-2 flex  flex-col gap-y-3 justify-center r">
                <h1 className="text-2xl">{product.state.name}</h1>
                <p className="text-lg">{product.state.price}</p>
                <p>Lorem ipsum dolor sit amet, erant saepe affert ex pro, eos id disputando liberavisse. Cum cu reque putent feugait, per te quidam integre dolorum. Et unum honestatis vel. Ornatus minimum mentitum ex nam, vim cu apeirian instructior. </p>
                <button className="bg-green-800 h-10 w-50 text-white rounded-sm cursor-pointer" onClick={()=>AddItem(product.state)}>Add to shopping cart</button>
            </div>
        </div>
        <div className="px-44 py-10 w-[100vw]">
            <h1 className="font-bold">Additional product information</h1>
            <p className="pt-5">In this section, it's important to include key information such as composition/material, care/use instructions, dimensions and weight, country of origin, warranty terms, assembly/installation recommendations, safety information, compliance with standards/regulations, technical specifications, and any certificates or awards. Providing these details gives customers a comprehensive understanding of the product, facilitating their purchasing decision and building trust in the brand.</p>
        </div>

        <div className="w-[80vw] h-[60px] flex justify-center items-center text-2xl bg-gray-300">
                <h1>BestSellers</h1>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 w-[80vw] h-[390px]">
                {
                    newdata.map((item,index)=>            
                        <div className="h-[300px] w-[270px] text-center" key={index}>
                        <img src={item.image} onClick={()=>navigate('/order',{state:item})} alt="imges" className="hover:scale-[1.05] transition duration-500 ease-in-out bg-gray-200"/>
                        <h1 className="text-2xl">{item.name}</h1>
                        <p>{item.price}</p>
                        </div>
                    )
                }
            </div>
            </div>
            <Footer/>
        </>
    )
}
export default Order;