import BlogPost from './BlogPost/BlogPost';
import classes from './BlogPosts.module.css';
import { useEffect } from 'react';
import { fetchPosts } from '../../store/blogPostSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
const BlogPosts = () => {
    const posts = useSelector((state) => state.blogPosts.posts);
    return (
        <div className={`${classes.blogPosts} app-container`}>
            {posts.map((post) => <BlogPost key={post.id} id={post.id} title={post.Title} subTitle={post.Subtitle} image={post.Image} />)}
        </div>
    )
}
export default BlogPosts;