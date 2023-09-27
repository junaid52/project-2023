import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import logo from './../../assets/Logo.png';
const Header = () => {
    return (
        <header className={classes.header}>
            <nav className='h-100'>
                <div className='app-container h-100'>
                    <div className='display-flex justify-space-between h-100'>
                        <div className={classes.logoContainer}>
                            <Link to='/'>
                                <img src={logo} alt='logo' className={classes.logo}></img>
                            </Link>
                        </div>
                        
                        <ul className={`${classes.rightContainer} display-flex`}>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About us</Link>
                            </li>
                            <li>
                                <Link to="/services">Services</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header;