import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const ProductCategory = () => {
    const { data: productCategorys = [], isLoading } = useQuery({
        queryKey: "productCategory",
        queryFn: async () => {
            const res = await fetch("https://phonex.vercel.app/categories");
            const data = await res.json();
            return data;
        }
    });


    return (
        <>{isLoading ? <h1 className="text-center text-xl p-3">Loading...</h1> : <div className="my-5 py-5  rounded-xl">
            <h1 className="text-2xl text-center">Category</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
                {
                    productCategorys.map((productCategory, index) => {
                        return <div key={index}>
                            <Link style={{
                                backgroundImage: `url(${productCategory.categoryImage})`,
                            }}
                                to={`/category/${productCategory._id}`}
                                className={`h-32 block overflow-hidden rounded-xl`}
                            >
                                <div className="bg-black bg-opacity-40 p-8 pt-20 text-white">
                                    <h3 className="text-2xl font-bold">{productCategory.categoryName}</h3>

                                </div>
                            </Link>

                        </div>
                    })

                }


            </div>

        </div>}</>

    );
};

export default ProductCategory;