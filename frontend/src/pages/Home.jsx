import BannerProduct from "../component/BannerProduct";
import CategoryList from "../component/CategoryList";
import HorizontalCardProduct from "../component/HorizontalCardProduct";
import VerticalCardProduct from "../component/VerticalCardProduct";



const Home = () => {
    return (
        <div className="">
            <CategoryList />
            <BannerProduct />
            <HorizontalCardProduct />
            <VerticalCardProduct category={"mobiles"} heading={"Mobiles"}/>
            <VerticalCardProduct category={"Mouse"} heading={"Mouse"}/>
            <VerticalCardProduct category={"televisions"} heading={"Televisions"}/>
            <VerticalCardProduct category={"camera"} heading={"Camera & Photography"}/>
            <VerticalCardProduct category={"earphones"} heading={"Wired Earphones"}/>
            <VerticalCardProduct category={"speakers"} heading={"Bluetooth Speakers"}/>
            <VerticalCardProduct category={"refrigerator"} heading={"Refrigerator"}/>
            <VerticalCardProduct category={"trimmers"} heading={"Trimmers"}/>
        </div>
    )
}

export default Home;