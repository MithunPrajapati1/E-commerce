import Footer from "./components/footer";
import Header from "./components/header";

var Contact=()=>{
    return(
        <>
        <Header/>
            <div className="w-full h-[60px] flex justify-center items-center text-2xl bg-gray-300">
                <h1>Contact</h1>
            </div>
            <div className="flex">
                <form className=" flex-1 flex justify-end items-center pt-10">
                    <div className="border-1 border-gray-100 shadow-lg h-[460px] w-[400px] p-10 gap-y-5">
                        <p className="flex flex-col gap-3">
                            <label for="r1">Name: </label> 
                            <input type="text" id="r1" className="border h-[35px]"/>
                        </p>
                        <br />
                        <p className="flex flex-col gap-3">
                            <label for="r2">e-mail: </label>
                            <input type="text" id="r2" className="border h-[35px]"/>
                        </p>
                        <br />
                        <p className="flex flex-col gap-3">
                            <label for="r4">Question: </label>
                            <input type="text" id="r4" className="border h-[35px]"/>
                        </p>
                        <p className="pt-5 pb-5 text-sm">
                            <input type="checkbox" id="r3"/>
                            <label for="r3"> I consent to the processing of my personal data.
                         I consent to the processing of my personal data.</label>
                         </p>
                         <div className="w-full text-center">
                         <button className="bg-green-900 text-white h-12 w-25 gap-4">Send</button>
                         </div>
                    </div>     
                </form>
                <div className="flex-1 flex flex-col gap-5 px-15 pt-10">
                    <div className="bg-gray-200 h-[150px] w-[280px] flex flex-col justify-center items-center gap-2">
                        <p className="text-green-700 text-4xl"><ion-icon name="call"></ion-icon></p>
                        <p className="text-xl font-bold">123 456 789</p>
                        <p className="text-sm">call us</p>
                    </div>
                    <div className="bg-gray-200 h-[150px] w-[280px] flex flex-col justify-center items-center gap-2">
                        <p className="text-green-700 text-4xl"><ion-icon name="mail-open"></ion-icon></p>
                        <p className="text-xl font-bold">info@yourweb.com</p>
                        <p className="text-sm">Write to us</p>
                    </div>
                    <div className="w-[280px] h-[60px] flex text-3xl gap-x-5 pt-[30px] text-gray-500 justify-center items-center">
                        <p className="hover:text-green-600 cursor-pointer"><ion-icon name="logo-facebook"></ion-icon></p>
                        <p className="hover:text-green-600 cursor-pointer"><ion-icon name="logo-instagram"></ion-icon></p>
                        <p className="hover:text-green-600 cursor-pointer"><ion-icon name="logo-tiktok"></ion-icon></p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Contact;