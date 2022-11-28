import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const Blog = () => {
    const { data: blogs = [], isLoading } = useQuery({
        queryKey: 'blogs',
        queryFn: () => fetch('https://phonex.vercel.app/blogs')
            .then(res => res.json())
            .then(data => {
                return data
            }
            )
    })
    return (
        <>{isLoading ? <h1>Loading...</h1> : <div>
            {
                blogs.map(blog => {
                    return <div key={blog._id} className="my-6 border border-black">
                        <article className="flex bg-white transition hover:shadow-xl">
                            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                                <time
                                    datetime="2022-10-10"
                                    className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                                >
                                    <span>{blog.publishedDate}</span>
                                    <span className="w-px flex-1 bg-gray-900/10"></span>

                                </time>
                            </div>

                            <div className="hidden sm:block sm:basis-56">
                                <img
                                    alt="Guitar"
                                    src={blog.image}
                                    className="aspect-square h-full w-full object-cover"
                                />
                            </div>

                            <div className="flex flex-1 flex-col justify-between">
                                <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                    <Link to="/">
                                        <h3 className="font-bold uppercase text-gray-900">
                                            {blog.title}
                                        </h3>
                                    </Link>

                                    <p className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                                        {blog.description}
                                    </p>
                                </div>

                            </div>
                        </article>

                    </div>
                }
                )
            }




        </div>}</>

    );
};

export default Blog;