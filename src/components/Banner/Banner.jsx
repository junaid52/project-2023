import bannerImage from './../../assets/Image.png';
import classes from './Banner.module.css';
const Banner = () => {
    return (
        <div className={classes.banner}>
                <div className={classes.subContainer1}>
                    <img src={bannerImage} alt="banner-img"></img>
                    <h1>Our Blog</h1>
                </div>
                <div className={`${classes.subContainer2} display-flex justify-content-center`}>
                    <h4>
                        Diagnose Car Problems If You Don’t Know Much About Cars
                    </h4>
                    <p>
                    We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.
                    </p>
                </div>
        </div>
    )
}
export default Banner;