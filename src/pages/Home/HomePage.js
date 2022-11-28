import AdvertisedItem from "./AdvertisedItem";
import Banner from "./Banner";
import NewsLater from "./NewsLater";

import ProductCategory from "./ProductCategory";

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertisedItem></AdvertisedItem>
            <ProductCategory></ProductCategory>
            <NewsLater></NewsLater>
        </div>
    );
};

export default HomePage;