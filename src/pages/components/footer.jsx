var Footer=()=>{
    return(
        <>
            <div className="h-[60px] w-full shadow-lg shadow-gray-300"></div>
            <div className="w-full h-[60px] flex justify-center items-center text-2xl gap-x-5 pt-[30px]">
                <p className="hover:text-green-600 cursor-pointer"><ion-icon name="logo-facebook"></ion-icon></p>
                <p className="hover:text-green-600 cursor-pointer"><ion-icon name="logo-instagram"></ion-icon></p>
                <p className="hover:text-green-600 cursor-pointer"><ion-icon name="logo-tiktok"></ion-icon></p>
            </div>

            <div className=" flex justify-center items-center gap-x-5 pt-[20px] text-lg px-10">
                <p className="hover:text-green-600 cursor-pointer">Shipping costs</p>
                <p className="hover:text-green-600 cursor-pointer"> Privacy Policy</p>
                <p className="hover:text-green-600 cursor-pointer"> Terms and conditions</p>
                <p className="hover:text-green-600 cursor-pointer"> Contact</p>
            </div>

             <div className="w-full h-[50px] bg-gray-300 flex justify-center items-center mt-[20px] text-md">
                <p>A website created in the WebWave website Builder.</p>
             </div>
        </>
    )
}
export default Footer;