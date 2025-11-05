import { useNavigate } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";

var newdata=[
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
]

var Bags = ()=>{
    var navigate=useNavigate()
    return(
        <>
            <Header/>
            <div className="w-full h-[60px] flex justify-center items-center text-2xl bg-gray-200">
                <h1>Bags</h1>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-18 w-full h-[390px]">
            {
                newdata.map((item,index)=>            
                    <div className="h-[300px] w-[300px] text-center">
                    <img src={item.image} onClick={()=>navigate('/order',{state:item})} alt="imges" className="hover:scale-[1.05] transition duration-500 ease-in-out bg-gray-200"/>
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

export default Bags;