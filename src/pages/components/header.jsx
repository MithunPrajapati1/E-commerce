import { useContext } from "react";
import { Link } from "react-router-dom";
import { Mydata } from "../../App";

var Header=()=>{
    var {cart}=useContext(Mydata)
    return(
        <>
            <div className="w-full h-[100px] flex justify-between items-center px-10">
                <div className="text-3xl hover:text-green-600 cursor-pointer">Handmade Bags</div>
                <div>
                    <ul className="flex gap-8 text-lg">
                        <li className=" hover:text-green-600 cursor-pointer"><Link to="/">Home</Link></li>
                        <li className=" hover:text-green-600 cursor-pointer"><Link to="/new">New</Link></li>
                        <li className=" hover:text-green-600 cursor-pointer"><Link to="/bags">Bags</Link></li>
                        <li className=" hover:text-green-600 cursor-pointer"><Link to="/backpacs">Backpacs</Link></li>
                        <li className=" hover:text-green-600 cursor-pointer"><Link to="/cosmetic">Cosmetic Bags</Link></li>
                        <li className=" hover:text-green-600 cursor-pointer"><Link to="/about">About Us</Link></li>
                        <li className=" hover:text-green-600 cursor-pointer"><Link to="/contact">Contact</Link></li>
                        
                    </ul>
                </div>
                <div className="text-4xl hover:text-green-600 cursor-pointer">
                    <Link to="/shop"><ion-icon name="cart-outline"></ion-icon></Link>
                </div>
                
            </div>
        </>
    )
}

export default Header;