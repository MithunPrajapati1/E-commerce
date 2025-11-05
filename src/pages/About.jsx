import Footer from "./components/footer";
import Header from "./components/header";

var About=()=>{
    return(
        <>
            <Header/>
            <div>
                <div className="w-full h-[60px] flex justify-center items-center text-2xl bg-gray-300">
                    <h1>About Us</h1>
                </div>
                <div className="flex justify-center items-center px-20 py-10">
                    <div className="flex-1">
                        <h1 className="text-xl">Our story...</h1>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit vulputate, fermentum pellentesque feugiat aenean fringilla torquent malesuada. Taciti fames vehicula.</p>
                        <br />
                        <p>aliquam arcu nascetur habitasse dictum conubia eleifend, proin netus magna mollis pulvinar nostra habitant suscipit quisque, eu molestie fusce et mi in adipiscing ad.</p>
                        <br />
                        <p>Commodo efficitur ac quisque in taciti arcu volutpat condimentum a tortor, malesuada facilisi etiam congue dictum finibus nulla nisi lorem, metus inceptos cras ridiculus curabitur.</p>
                        <br/>
                        <p>Commodo efficitur ac quisque in taciti arcu volutpat condimentum a tortor, malesuada facilisi etiam congue dictum finibus nulla nisi lorem, metus inceptos cras ridiculus curabitur.</p>
                        <br/>
                        <p>Commodo efficitur ac quisque in taciti arcu volutpat condimentum a tortor, malesuada facilisi etiam congue dictum finibus nulla nisi lorem, metus inceptos cras ridiculus curabitur.</p>
                    </div>
                    <div className="flex-1">
                        <img src="./About.png" className="w-full"/>
                    </div>
                </div>
                <div className="px-20">
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit vulputate, fermentum pellentesque feugiat aenean fringilla torquent malesuada. Taciti fames vehicula aliquam arcu nascetur habitasse dictum conubia eleifend, proin netus magna mollis pulvinar.</p>
                    <br />
                    <p>Erat eget ante vulputate. Consectetur felis finibus nibh eleifend curae rutrum class ultrices velit, ante volutpat ex cras semper at pretium conubia sodales, interdum torquent varius malesuada facilisi dictum nec metus. Lacinia suspendisse magnis turpis massa etiam iaculis est, nam magna ultricies leo himenaeos scelerisque natoque viverra, lorem libero commodo tellus aliquet ornare.</p>
                </div>
                <div className="text-center text-3xl text-gray-900 pt-20">
                    <h1>Customer reviews</h1>
                </div>
                <div className="text-center mt-20 pb-10 border-2 shadow-lg  border-gray-100 w-320 m-auto">
                    <br />
                    <p className="text-gray-600 italic">Duis congue lectus vel rutrum facilisis. In hac habitasse platea dictumst. Nam accumsan libero libero, vehicula fringilla elit mattis</p>
                    <p className="text-gray-600 italic">sed. Praesent nec feugiat velit, sit amet tempor.</p>
                    <br />
                    <h1 className="text-xl text-gray-800">Susan Debbe</h1>
                    <ul className="flex text-yellow-500 justify-center items-center">
                        <li><ion-icon name="star"></ion-icon></li>
                        <li><ion-icon name="star"></ion-icon></li>
                        <li><ion-icon name="star"></ion-icon></li>
                        <li><ion-icon name="star"></ion-icon></li>
                        <li><ion-icon name="star"></ion-icon></li>
                    </ul>
                </div>

                <div className="text-center mt-20 pb-10 border-2 border-gray-100 shadow-lg w-320 m-auto">
                    <br />
                    <p className="text-gray-600 italic">Duis congue lectus vel rutrum facilisis. In hac habitasse platea dictumst. Nam accumsan libero libero, vehicula fringilla elit mattis</p>
                    <p className="text-gray-600 italic">sed. Praesent nec feugiat velit, sit amet tempor.</p>
                    <p  className="text-gray-600 italic">Nam accumsan libero libero, vehicula fringilla elit mattis sed.</p>
                    <br />
                    <h1 className="text-xl text-gray-800">Madison Evans</h1>
                    <ul className="flex text-yellow-500 justify-center items-center">
                        <li><ion-icon name="star"></ion-icon></li>
                        <li><ion-icon name="star"></ion-icon></li>
                        <li><ion-icon name="star"></ion-icon></li>
                        <li><ion-icon name="star"></ion-icon></li>
                        <li><ion-icon name="star"></ion-icon></li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default About;