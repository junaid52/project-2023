import Banner from "../components/Banner/Banner";
import FeaturedPost from "../components/FeaturedPost/FeaturedPost";
import BlogPosts from "../components/BlogPosts/BlogPosts";
import Spinner from "../components/Ui/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "../store/blogPostSlice";
const Blog = () => {
    const loading = useSelector(state => state.blogPosts.loading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts);
    }, [])
    return (
        <>  
            {loading && <Spinner />}
            {!loading && <div className="main-container">
                            <Banner />
                            <FeaturedPost />
                            <BlogPosts />
                            <div className="app-container display-flex justify-content-center">
                                <button className="btn btn-black">Load More</button>
                            </div>
            
                        </div>
            }
        </>
        
    )
}
export default Blog;