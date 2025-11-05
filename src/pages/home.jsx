import Footer from"./components/header";
import Header from "./components/header";
import Product from "./components/Product";
import Slider from "./components/slider";
import Slider2 from "./components/slider2";

var Home = ()=>{
    return(
        <>
            <Header/>
            <Slider/>
            <Product/>
            <Slider2/>
            <Footer/>
        </>
    )
}

export default Home;