
import aboutCoffeePage from '../../image/aboutCoffeePage.jpg';
import aboutLogo from '../../image/about-logo.svg';

import './aboutCoffeePage.sass';


const AboutCoffeePage = () => {
    return (
        <section className="section-about-coffee">
            <div className="about-content">
                <div className="content-img">
                    <img src={aboutCoffeePage} alt="coffeeMark" className="content-img_img" />
                </div>
                <div className="content-text">
                    <h2 className="content-text__title">About it</h2>
                    <div className="decor-black"></div>
                    <img src={aboutLogo} alt="beans" className='about__logo'/>
                    <div className="decor-black"></div>
                    <p className="content-text__paragraph">
                        <span className="bold">Country:</span> Brasil</p>
                    <p className="content-text__paragraph">
                        <span className="bold">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p className="content-text__paragraph">
                        <span className="bold">Price:</span><span className="bold_big">  16.99$</span>
                    </p>
                </div>
            </div>
        </section>
    )
}




export default AboutCoffeePage;