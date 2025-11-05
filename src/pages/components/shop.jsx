import { useContext, useEffect, useState } from "react";
import Header from "./header";
import { Mydata } from "../../App";
import products from "../../data";

var Shop = () => {
    
    var [total,setTotal]=useState(0)
    var [sub,setSub]=useState(0)
    

    var { cart, setCart } = useContext(Mydata)

    var Calculate=()=>{
        var t=0;
        cart.forEach((item)=>{
            t+=(item.price*item.qty)
        });+ 
        setTotal(t)
    }
    
    var Remove=(index)=>{
         var xyz=[...cart]
         xyz.splice(index,1)
         setCart(xyz)
    }

    useEffect(()=>Calculate(),[cart])
    
    var decreaseQty=(index)=>{
            var xyz=[...cart]
            var product=xyz[index]
            if(product.qty>1)
            {
            product.qty=product.qty-1
            }
            setCart(xyz)
            Calculate()
    }

    var increaseQty=(index)=>{
        var xyz=[...cart]
        var product=xyz[index]
        product.qty=product.qty+1
        setCart(xyz)
    }


   
    return (
        <>
            <Header />

            <div className="w-full h-[60px] flex justify-center items-center text-2xl bg-gray-300">
                <h1>Shopping Cart</h1>
            </div>
            
            <div className="flex">
                <div className="bg-blue-10 w-1/2 h-screen  flex justify-start flex-col overflow-scroll  px-8">
                    {
                        cart.map((item, index) => <div  key={index} className="h-[200px] w-[500px]  md:shadow-lg flex border-b-2 border-black">
                            <img src={item.image} className="h-full" />
                            <div className="flex flex-col justify-center gap-y-4">
                                <h1 className="text-2xl">{item.name}</h1>
                                <h4>{item.price}</h4>
                                <div>
                                    <button onClick={()=>decreaseQty(index)}>-</button>
                                    {item.qty}
                                    <button onClick={()=>increaseQty(index)}>+</button>
                                </div>
                                <button className=" border-2 border-blue-500  hover:bg-blue-300  h-[30px] w-25 rounded-xl " onClick={()=>Remove(index)}>Remove</button>
                            </div>
                        </div>
                        )
                    }


                </div>
                <div className="font-bold text-2xl mt-10 flex ">
        
                    Total Amount :- {total}
            
                    </div>
                
            </div>

        

        </>
    )
}
export default Shop;