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

import coffee from '../../image/catalogAbout-img.png';
import coffee2 from '../../image/pleasureAbout-img.png';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {name: 'Solimo Coffee Beans 2 kg', price: '10.73$', id: 1},
                {name: 'Presto Coffee Beans 1 kg', price: '15.99$', id: 2},
                {name: 'AROMISTICO Coffee 1 kg', price: '6.99$', id: 3}
            ]
        }
    }


    render() {
        const {products} = this.state;

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
                            <CatalogFilter/>
                            <CatalogGoods/>
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
