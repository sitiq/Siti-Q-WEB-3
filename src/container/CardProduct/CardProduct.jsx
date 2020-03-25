import React, {Component} from 'react';

class CardProduct extends Component{
    state = {
        order: 4,
        name: 'sitiq'
    }
    handleCounterChange= (newValue)=>{
        this.props.onCounterChange(newValue);
    }

    handlePlus=()=>{
        // alert ('Plus Button');
        this.setState({
            order: this.state.order + 1
        }, ()=>{
            this.handleCounterChange(this.state.order);
        })  
    }

    handleMinus=()=>{
        // alert ('Minus Button');
        if(this.state.order > 0){
        this.setState({
            order: this.state.order - 1
        }, ()=>{
            this.handleCounterChange(this.state.order);
            })
        }
    }
    render(){
        return(
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyxOn25kMKi04xxqadav3_Yk2d8-0LQsyb3g7_Wk_mwnzJ83c3" alt="product_image"/>
                    </div>
                    <p className="product-title">Tas Punggung Awet</p>
                    <p className="product-price">Rp 50.000</p>
                    <div className="counter">
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input type="text" value={this.state.order}/>
                        <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
          

            
        );
    }
}

export default CardProduct;