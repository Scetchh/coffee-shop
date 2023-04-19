import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import Header from '../mainPage/header/header';
import About from '../mainPage/about/about';
import Best from '../mainPage/section-best/section-best';
import Footer from '../mainPage/footer/footer';

import CatalogHeader from '../catalog/catalogHeader/catalogHeader';
import CatalogAbout from '../catalog/catalogAbout/catalogAbout';
import CatalogGoods from '../catalog/catalogGoods/catalogGoods';
import CatalogFilter from '../catalog/catalogFilter/catalogFilter';

import AboutCoffeePage from '../aboutCoffeePage/aboutCoffeePage';

import PleasureHeader from '../pleasurePage/pleasureHeader/pleasureHeader';

import './App.sass';

import firstProduct from '../../image/card-1.png';
import secondProduct from '../../image/card-2.png';
import thirdProduct from '../../image/card-3.png';
import coffee from '../../image/catalogAbout-img.png';
import coffee2 from '../../image/pleasureAbout-img.png';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {name: 'Solimo Coffee Beans 2 kg', price: '10.73$', img: {firstProduct}, id: 1},
                {name: 'Presto Coffee Beans 1 kg', price: '15.99$', img: {secondProduct}, id: 2},
                {name: 'AROMISTICO Coffee 1 kg', price: '6.99$', img: {thirdProduct}, id: 3}
            ],
            goods: [
                {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 1},
                {name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: '6.99$', id: 2},
                {name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '6.99$', id: 3},
                {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 4},
                {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 5},
                {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 6},
            ],
            term: '',
            filter: 'all'
        }
    }

    searchCoffee = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(items => {
            return items.country.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term : term})
    }

    filterCoffee = (items, filter) => {
        switch(filter) {
            case 'brazil':
                return items.filter(item => item.country === 'Brazil');
            case 'kenya':
                return items.filter(item => item.country === 'Kenya');
            case 'columbia':
                return items.filter(item => item.country === 'Columbia')
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {products, goods, term, filter} = this.state;
        const visibleGoods = this.filterCoffee(this.searchCoffee(goods, term), filter);

        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/">
                            <Header/>
                            <About/>
                            <Best products={products}/>
                            <Footer/>
                        </Route>
                        <Route exact path="/ourCoffee">
                            <CatalogHeader/>
                            <CatalogAbout img={coffee}/>
                            <CatalogFilter onUpdateSearch={this.onUpdateSearch} filter={filter} onFilterSelect={this.onFilterSelect}/>
                            <CatalogGoods goods={visibleGoods}/>
                            <Footer/>
                        </Route>
                        <Route exact path="/aboutIt">
                            <CatalogHeader/>
                            <AboutCoffeePage/>
                            <Footer/>
                        </Route>
                        <Route exact path="/pleasure">
                            <PleasureHeader/>
                            <CatalogAbout img={coffee2}/>
                            <CatalogGoods/>
                            <Footer/>
                        </Route>
                    </Switch>
                </div>
            </Router>
          );
    }

}

export default App;
