import {Link} from 'react-router-dom';

import logo from '../../../image/logo.svg'
import whiteLogo from '../../../image/white-logo.svg';

import './header.sass';


const Header = () => {
    return (
        <header className="header">
            <nav className='header__nav'>
                <Link to='/' className='header__link_logo'>
                    <img src={logo} alt="logo" className='header__logo'/>
                </Link>
                <Link to='/' className='header__link'>Coffee house</Link>
                <Link to='/ourCoffee' className='header__link'>Our coffee</Link>
                <Link to='/pleasure' className='header__link'>For your pleasure</Link>
            </nav>
            <div className="meeting">
                <h1 className="meeting__title">Everything You Love About Coffee</h1>
                <div className="decor"></div>
                <img src={whiteLogo} alt="logo1" className="meeting__img" />
                <div className="decor"></div>
                <p className="meeting__paragraph">We makes every day full of energy and taste</p>
                <p className="meeting__paragraph">Want to try our beans?</p>
                <Link to='/ourCoffee' className="meeting__button">More</Link>
            </div>
        </header>
    )
}

export default Header;