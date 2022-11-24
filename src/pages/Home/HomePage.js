import AdvertisedItem from "./AdvertisedItem";
import Banner from "./Banner";
import ProductCategory from "./ProductCategory";

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertisedItem></AdvertisedItem>
            <ProductCategory></ProductCategory>
        </div>
    );
};

export default HomePage;