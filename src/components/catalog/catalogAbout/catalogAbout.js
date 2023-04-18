

import aboutLogo from '../../../image/about-logo.svg';

import './catalogAbout.sass';

const CatalogAbout = (props) => {
    return (
        <div className="about-wrapper">
            <main className="about container">
                <div className="container-img">
                    <img src={props.img} alt="coffeeImg" className="container-img__img" />
                </div>
                <div className="container-text">
                    <h2 className="container-text__title">About our Beans</h2>
                    <div className="decor-black"></div>
                    <img src={aboutLogo} alt="beans" className='about__logo'/>
                    <div className="decor-black"></div>
                    <p className="container-text__paragraph">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                    <p className="container-text__paragraph">Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</p>
                </div>
                
            </main>
            <div className="decor-black decor-black_long"></div>
        </div>
    )
}


export default CatalogAbout;