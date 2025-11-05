import { useState } from "react";
import { Link } from "react-router-dom";


var Slider=()=>{


    var [index,setIndex]=useState(0)

    setInterval(()=>{
        setIndex(index==0?1:0)
    },3000)

    var images=[
        './slider/01.png',
        './slider/02.png',
    ]
    return(
        <>
            <div className="w-screen h-[500px] flex justify-center items-center bg-blue-100 relative">
                <div className="flex-1 justify-center  items-center px-20 py-20">
                    <h1 className="text-7xl gap-y-10">New<br />Collection</h1>
                    <p className="my-15 text-gray-800 text-lg">The highest quality product, sewn in Ireland from <br />
                        Irish materials. Quality and durability for years.
                    </p>
                    <Link to="/new"><button className="bg-green-600 text-white font-bold px-6 py-3">New Collection</button></Link>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <img src={images[index]}/>
                    <ul className="absolute z-50 flex gap-x-2 bottom-3">
                        <li className={`w-5 h-3 rounded-2xl ${index==0?'bg-red-900':'bg-red-200'}`}></li>
                        <li className={`w-5 h-3 rounded-2xl ${index==1?'bg-red-900':'bg-red-200'}`}></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Slider;