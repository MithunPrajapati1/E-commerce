import { useState } from "react";

var Slider2=()=>{
    var [show,setShow]=useState(false)
    var slides=["./slider2/01.jpeg","./slider2/02.jpeg"]
    var [index,setIndex]=useState(0)

    setInterval(()=>{
        setIndex(index==0?1:0)
    },5000)

    var pre=()=>{
            if(index==1){

                setIndex(index-1)
            }
            else if(index==0){
                setIndex(index+1)
            }        
    }

    return(
        <div className="relative">
            <div className="flex justify-center items-center slider" onClick={()=>setShow(true)}>
                <img src={slides[index]} className="w-full h-[700px]  image"/>
                
                {show==true?
                <div className="absolute w-[90vw] h-[40px] flex justify-between control">
                    <button className="bg-transparent text-3xl hover:text-white" onClick={pre}><ion-icon name="chevron-back"></ion-icon></button>
                    <button className="bg-transparent text-3xl hover:text-white" onClick={pre}><ion-icon name="chevron-forward"></ion-icon></button>
                </div>:""}
                <ul className="absolute z-50 flex gap-x-2 bottom-3">
                    <li className={`w-4 h-4 rounded-full ${index==0?'bg-red-900':'bg-red-200'}`} onClick={()=>setIndex(0)}></li>
                    <li className={`w-4 h-4 rounded-full ${index==1?'bg-red-900':'bg-red-200'}`} onClick={()=>setIndex(1)}></li>
                </ul>
            </div>
        </div>
    )
}

export default Slider2;