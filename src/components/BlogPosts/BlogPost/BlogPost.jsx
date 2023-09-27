import classes from './BlogPost.module.css';
import viewsIcon from './../../../assets/Eye.svg';

import { Link } from 'react-router-dom';
const BlogPost = (props) => {
    
    return (
        <Link to={`posts/${props.id}`}>
            <ul className={classes.blogPost}>
            <li className={classes.blogPostImageContainer}>
                <img src={props.image}></img>
            </li>
            <li className='display-flex justify-space-between paragraph-2-body paragraph-secondary-color'>
                <p>
                    Posted on October 6th 2021
                </p>
                <p className='display-flex'>
                    <img src={viewsIcon} className={classes.viewsIcon}></img>
                    563 views
                </p>
            </li>
            <li>
                <h5 className='heading-primary-color'>
                    {props.title}
                </h5>
            </li>
            <li>
                <p className='paragraph-2-body paragraph-primary-color'>
                    {props.subTitle}
                </p>
            </li>
        </ul>
        </Link>
        
    )
}
export default BlogPost;