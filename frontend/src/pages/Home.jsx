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
            <VerticalCardProduct />
        </div>
    )
}

export default Home;