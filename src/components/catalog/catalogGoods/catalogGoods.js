import { Link } from 'react-router-dom';

import goodsImg from '../../../image/goods-card-img.png';

import './catalogGoods.sass';

const CatalogGoods = ({goods}) => {
    const elements = goods.map(item => {
        return (
            <Link to='/aboutIt' className="goods-link">
                <img src={goodsImg} alt="card" className="goods__img" />
                <p className="goods__paragraph">{item.name}</p>
                <p className="goods__paragraph">{item.country}</p>
                <p className="goods__paragraph_price">{item.price}</p>
            </Link>
        );
    })
    return (
        <section className="section-goods">
            <div className="goods-cards goods">
                {elements}
            </div>
        </section>
    )
}


export default CatalogGoods;