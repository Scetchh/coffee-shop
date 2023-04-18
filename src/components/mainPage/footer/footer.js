import { Link } from 'react-router-dom';

import logo from '../../../image/footer-logo.svg';
import aboutLogo from '../../../image/about-logo.svg';

import './footer.sass';

const Footer = () => {
    return (
        <footer className="footer">
            <nav className='footer__nav'>
                <Link to='/' className='footer__link_logo'>
                    <img src={logo} alt="logo" className='footer__logo'/>
                </Link>
                <Link to='/' className='footer__link'>Coffee house</Link>
                <Link to='/ourCoffee' className='footer__link'>Our coffee</Link>
                <Link to='/pleasure' className='footer__link'>For your pleasure</Link>
            </nav>
            <div className="decor-black"></div>
            <Link to='/'>
                <img src={aboutLogo} alt="beans" className='about__logo'/>
            </Link>
            <div className="decor-black"></div>
        </footer>
    )
}



export default Footer;