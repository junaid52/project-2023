import classes from './Post.module.css';
import viewsIcon from './../assets/Eye.svg'
import { useEffect } from 'react';
import { fetchPost } from '../store/blogPostSlice';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Spinner from '../components/Ui/Spinner';
const Post = () => {
    const {id} = useParams();
    const post = useSelector(state => state.blogPosts.post);
    const loading = useSelector(state => state.blogPosts.loading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPost(id))
    }, [])
    return (
        <>
            {loading && <Spinner />}
            {!loading && 
            <div>
                <div className='app-container-sm'>
                <div className={`${classes.postHeader} display-flex`}>
                            <p className='display-flex paragraph-2-body paragraph-secondary-color'>
                                <span className={classes.dateContainer}>
                                    Posted on October 6th 2021
                                </span>
                                <span className={`${classes.viewsContainer} display-flex`}>
                                    <img src={viewsIcon} alt='views icon'></img>
                                    563 views
                                </span>
                            </p>
                            
                        </div>
                        <h4 className={classes.postHeading}>
                            {post.Title}
                        </h4>
                        <p className='paragraph-2-body paragraph-primary-color'>
                            {post.Subtitle}
                        </p>
            </div>
            <div className={`app-container ${classes.postImageContainer}`}>
                <img src={post.Image} className='img'></img>
            </div>
            <div className='app-container-sm'>
                <p className='paragraph-2-body paragraph-primary-color'>{post.Article}</p>
            </div>
            </div>
            
            }
        </>
    )
}
export default Post;