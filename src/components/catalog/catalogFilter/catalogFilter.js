
import './catalogFilter.sass';

const CatalogFilter = () => {
    return (
        <div className="input-filter-wrapper">
            <div className="input-box">
                <label htmlFor="searchCoffee" className="input-box__label">Looking for</label>
                <input type="text" id='searchCoffee' placeholder='start typing here...' className="input-box__input" />
            </div>
            <div className="filter-box">
                <span className="filter-box__span">Or filter</span>
                <button className="filter-box__button">Brazil</button>
                <button className="filter-box__button">Kenya</button>
                <button className="filter-box__button">Columbia</button>
            </div>
        </div>
    )
}


export default CatalogFilter;