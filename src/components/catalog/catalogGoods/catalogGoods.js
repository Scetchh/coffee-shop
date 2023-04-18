import { Link } from 'react-router-dom';

import goodsImg from '../../../image/goods-card-img.png';

import './catalogGoods.sass';

const CatalogGoods = () => {
    return (
        <section className="section-goods">
            <div className="goods-cards goods">
                <Link to='/aboutIt' className="goods-link">
                        <img src={goodsImg} alt="card1" className="goods__img" />
                        <p className="goods__paragraph">AROMISTICO Coffee 1 kg</p>
                        <p className="goods__paragraph">Brazil</p>
                        <p className="goods__paragraph_price">6.99$</p>
                </Link>
                <Link to='/aboutIt' className="goods-link">
                        <img src={goodsImg} alt="card2" className="goods__img" />
                        <p className="goods__paragraph">AROMISTICO Coffee 1 kg</p>
                        <p className="goods__paragraph">Kenya</p>
                        <p className="goods__paragraph_price">6.99$</p>
                </Link>
                <Link to='/aboutIt' className="goods-link">
                        <img src={goodsImg} alt="card3" className="goods__img" />
                        <p className="goods__paragraph">AROMISTICO Coffee 1 kg</p>
                        <p className="goods__paragraph">Columbia</p>
                        <p className="goods__paragraph_price">6.99$</p>
                </Link>
                <Link to='/aboutIt' className="goods-link">
                        <img src={goodsImg} alt="card4" className="goods__img" />
                        <p className="goods__paragraph">AROMISTICO Coffee 1 kg</p>
                        <p className="goods__paragraph">Brazil</p>
                        <p className="goods__paragraph_price">6.99$</p>
                </Link>
                <Link to='/' className="goods-link">
                        <img src={goodsImg} alt="card5" className="goods__img" />
                        <p className="goods__paragraph">AROMISTICO Coffee 1 kg</p>
                        <p className="goods__paragraph">Brazil</p>
                        <p className="goods__paragraph_price">6.99$</p>
                </Link>
                <Link to='/aboutIt' className="goods-link">
                        <img src={goodsImg} alt="card6" className="goods__img" />
                        <p className="goods__paragraph">AROMISTICO Coffee 1 kg</p>
                        <p className="goods__paragraph">Brazil</p>
                        <p className="goods__paragraph_price">6.99$</p>
                </Link>
            </div>
        </section>
    )
}


export default CatalogGoods;