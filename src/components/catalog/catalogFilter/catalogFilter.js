import { Component } from 'react';
import './catalogFilter.sass';

class CatalogFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term: term});
        this.props.onUpdateSearch(term);
    }


    render() {
        const buttonsData = [
            {name: 'all', label: 'All'},
            {name: 'brazil', label: 'Brazil'},
            {name: 'kenya', label: 'Kenya'},
            {name: 'columbia', label: 'Columbia'}
        ]
        const buttons = buttonsData.map(({name, label}) => {
            const active = this.props.filter === name;
            const clazz = active ? 'filter-box__button active' : 'filter-box__button';
            return (
                <button 
                    className={`${clazz}`}
                    type="button"
                    key = {name}
                    onClick={() => this.props.onFilterSelect(name)}
                    >
                    {label}
                </button>
            )
        })
        return (
            <div className="input-filter-wrapper">
                <div className="input-box">
                    <label htmlFor="searchCoffee" className="input-box__label">Looking for</label>
                    <input type="text" id='searchCoffee' 
                    placeholder='start typing here...' 
                    className="input-box__input" 
                    value={this.state.term}
                    onChange={this.onUpdateSearch}/>
                </div>
                <div className="filter-box">
                    <span className="filter-box__span">Or filter</span>
                    {buttons}
                </div>
            </div>
        )
    }
}


export default CatalogFilter;