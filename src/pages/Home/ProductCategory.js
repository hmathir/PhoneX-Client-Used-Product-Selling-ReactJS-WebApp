import { Link } from "react-router-dom";

const ProductCategory = () => {
    return (
        <div className="my-5 py-5  rounded-xl">
            <h1 className="text-2xl text-center">Category</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3">

                <div>
                    <Link
                        to="/"
                        class=" h-32 block overflow-hidden rounded-xl bg-[url(https://www.apple.com/v/iphone/home/bk/images/meta/iphone__ky2k6x5u6vue_og.png)] bg-cover bg-center bg-no-repeat"
                    >
                        <div class="bg-black bg-opacity-40 p-8 pt-20 text-white">
                            <h3 class="text-2xl font-bold">Used iPhone</h3>

                        </div>
                    </Link>

                </div>
                <div>
                    <Link
                        to="/"
                        class=" h-32 block overflow-hidden rounded-xl bg-[url(https://www.apple.com/v/iphone/home/bk/images/meta/iphone__ky2k6x5u6vue_og.png)] bg-cover bg-center bg-no-repeat"
                    >
                        <div class="bg-black bg-opacity-40 p-8 pt-20 text-white">
                            <h3 class="text-2xl font-bold">Used iPhone</h3>

                        </div>
                    </Link>

                </div>
                <div>
                    <Link
                        to="/"
                        class=" h-32 block overflow-hidden rounded-xl bg-[url(https://www.apple.com/v/iphone/home/bk/images/meta/iphone__ky2k6x5u6vue_og.png)] bg-cover bg-center bg-no-repeat"
                    >
                        <div class="bg-black bg-opacity-40 p-8 pt-20 text-white">
                            <h3 class="text-2xl font-bold">Used iPhone</h3>

                        </div>
                    </Link>

                </div>
            </div>

        </div>
    );
};

export default ProductCategory;