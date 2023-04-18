import { Link } from 'react-router-dom';

import logo from '../../../image/logo.svg'

import './catalogHeader.sass';


const CatalogHeader = () => {
    return (
        <header className="catalogHeader">
            <nav className='header__nav'>
                <Link to='/' className='header__link_logo'>
                    <img src={logo} alt="logo" className='header__logo'/>
                </Link>
                <Link to='/' className='header__link'>Coffee house</Link>
                <Link to='/ourCoffee' className='header__link'>Our coffee</Link>
                <Link to='/pleasure' className='header__link'>For your pleasure</Link>
            </nav>
            <div className="meeting">
                <h1 className="meeting__title">Our Coffee</h1>
            </div>
        </header>
    )
}


export default CatalogHeader;