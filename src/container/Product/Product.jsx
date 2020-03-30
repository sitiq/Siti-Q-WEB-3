import React, {Component, Fragment} from 'react';
import './Product.css';
import CardProduct from '../CardProduct/CardProduct';

class Product extends Component{
    state = {
        order: 1,
        name: 'sitiq'
    }
    //diganti props
    // handlePlus=()=>{
    //     // alert ('Plus Button');
    //     this.setState({
    //         order: this.state.order + 1
    //     })
    // }

    // handleMinus=()=>{
    //     // alert ('Minus Button');
    //     if(this.state.order > 0){
    //     this.setState({
    //         order: this.state.order - 1
    //         })
    //     }
    // }

    handleCounterChange =(newValue) => {
        this.setState({
            order:newValue
        })

    }
    render(){
        return(
            <Fragment>
                <p>Halaman Product </p>
                <hr />
                <div className="header">
                    <div className="logo">
                        <b>SHOPPING</b>
                        {/* <img src="" alt=""/> */}
                    </div>
                <div className="troley">
                    <img src="https://cdn.onlinewebfonts.com/svg/img_258388.png" alt=""/>
                    <div className="count">{this.state.order}</div>
                  </div>
                </div>
                <CardProduct onCounterChange={(value)=>this.handleCounterChange(value)} />
            </Fragment>   
        );
    }
}

export default Product;