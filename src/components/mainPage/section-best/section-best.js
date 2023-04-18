import firstCard from '../../../image/card-1.png';
import secondCard from '../../../image/card-2.png';
import thirdCard from '../../../image/card-3.png';

import { Link } from 'react-router-dom';

import './section-best.sass';

const Best = ({products}) => {
    return (
        <section className="best">
            <h2 className="best__title">Our best</h2>
            <div className="best__cards cards">
                <Link to='/aboutIt' className="cards__link">
                    <div className="card-item-1">
                        <img src={firstCard} alt="card1" className="cards__img" />
                        <p className="cards__paragraph">{products[0].name}</p>
                        <p className="cards__paragraph_price">{products[0].price}</p>
                    </div>
                </Link>
                <Link to='/aboutIt' className="cards__link">
                    <div className="card-item-2">
                        <img src={secondCard} alt="card1" className="cards__img" />
                        <p className="cards__paragraph">{products[1].name}</p>
                        <p className="cards__paragraph_price">{products[1].price}</p>
                    </div>
                </Link>
                <Link to='/aboutIt' className="cards__link">
                    <div className="card-item-3">
                        <img src={thirdCard} alt="card1" className="cards__img" />
                        <p className="cards__paragraph">{products[2].name}</p>
                        <p className="cards__paragraph_price">{products[2].price}</p>
                    </div>
                </Link>
            </div>
        </section>
    )
}





export default Best;