import classes from './FeaturedPost.module.css';
import viewsIcon from './../../assets/Eye.svg';
import arrowIcon from './../../assets/Arrow.svg';
import carImage from './../../assets/car-image.png';
const FeaturedPost = () => {
    return (
        <div className={classes.mainContainer}>
            <div className={`${classes.featuredPost} app-container`}>
                <div className={classes.container1}>
                    <img src={carImage}></img>
                </div>
                <div className={classes.container2}>
                    <div className={`${classes.postHeader} display-flex justify-space-between`}>
                        <p className='display-flex paragraph-2-body paragraph-secondary-color'>
                            <span className={classes.dateContainer}>
                                Posted on October 6th 2021
                            </span>
                            <span className={`${classes.viewsContainer} display-flex`}>
                                <img src={viewsIcon} alt='views icon'></img>
                                563 views
                            </span>
                        </p>
                        <p className='paragraph-2-body color-orange upper-case'>
                            Featured
                        </p>
                    </div>
                    <h4 className={classes.postHeading}>
                        Should I Buy a New Car or Lease a New Car in 2021?
                    </h4>
                    <p className='paragraph-2-body paragraph-primary-color'>
                        We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.
                    </p>
                    <div className={`${classes.readMoreContainer} paragraph-primary-color`}>
                        <a href='#'>
                            Read more
                            <img src={arrowIcon} alt='read more icon'></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default FeaturedPost;