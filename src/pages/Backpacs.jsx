import { useNavigate } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";

var newdata=[
    {
        "name":"Backpack Emily",
        "price":80,
        "image":"./products/02.png",
        "qty":1,
    },
    {
        "name":"Backpack Natalie",
        "price":80,
        "image":"./products/03.png",
        "qty":1,
    },
    {
        "name":"Backpack Lily",
        "price":80,
        "image":"./products/04.png",
        "qty":1,
    },
    {
        "name":"Bag Sandra",
        "price":80,
        "image":"./products/06.png",
        "qty":1,
    },
]

var Backpacs = ()=>{
    var navigate=useNavigate()
    return(
        <>
            <Header/>
            <div className="w-full h-[60px] flex justify-center items-center text-2xl bg-gray-200">
                <h1 className="new">Backpacs</h1>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-18 w-full h-[390px]">
            {
                newdata.map((item,index)=>            
                    <div className="h-[300px] w-[300px] text-center">
                    <img src={item.image} alt="imges" onClick={()=>navigate('/order',{state:item})} className="hover:scale-[1.05] transition duration-500 ease-in-out bg-gray-200"/>
                    <h1 className="text-2xl">{item.name}</h1>
                    <p>{item.price}</p>
                    </div>
                )
            }
            </div>
            <Footer/>
        </>
    )
}

export default Backpacs;