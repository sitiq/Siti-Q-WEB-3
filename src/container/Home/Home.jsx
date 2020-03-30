import React, {Component, Fragment} from 'react';
import Product from'../Product/Product';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Profil from '../../component/Profil';
import './Home.css'
import CardProduct from '../CardProduct/CardProduct';

class Home extends Component{
    render(){
        return(
            <BrowserRouter>
                {/* <div>
                    <p>Counter</p>
                    <hr/>
                    <Product />
                    <p>Profil</p>
                    <hr/>
                    <Profil />
                </div> */}
                <Fragment>
                    <div className="navigation">
                        <Link to="/" >Product</Link>
                        <Link to="profil" >Profil</Link>
                    </div>
                    <Route path="/" exact component={Product}/>
                    <Route path="/profil" component={Profil}/>
                </Fragment>
                
            </BrowserRouter>
        )
    }
}

export default Home;