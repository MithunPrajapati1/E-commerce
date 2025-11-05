import { Link, useNavigate } from "react-router-dom";
import products from "../../data";
var Product=()=>{
    var navigate=useNavigate()
    return(
        <>
        
        <div className="flex flex-wrap justify-center gap-x-10  gap-y-10 py-16">
        {
            products.map((item,index)=>            
                <div className="h-[320px] w-[300px] text-center cursor-pointer" key={index}>
                    <img src={item.image} onClick={()=>navigate('/order',{state:item})} alt="imges" className="hover:scale-[1.1] transition duration-500 ease-in-out"/>
                    <h1 className="text-2xl">{item.name}</h1>
                    <p>{item.price}</p>
                </div>
                
            )
        }
        </div>
        </>
    )
}
export default Product;