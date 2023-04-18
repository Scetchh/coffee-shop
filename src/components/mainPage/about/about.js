import './about.sass';

import aboutLogo from '../../../image/about-logo.svg';

const About = () => {
    return (
        <main className="wrapper about">
            <h2 className="about__title">About us</h2>
            <div className="decor-black"></div>
            <img src={aboutLogo} alt="beans" className='about__logo'/>
            <div className="decor-black"></div>
            <div className="grid-container">
                <p className="about__paragraph">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.Afraid at highly months do things on at. Situation recommend objection do intentionso questions. As greatly removed calling pleased improve an. Last ask him cold feelmet spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</p>
                <p className="about__paragraph mb-100">Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.</p>
            </div>
        </main>
    )
}


export default About;