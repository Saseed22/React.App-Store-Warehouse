import React, { Component } from 'react';
import ProductsContext from '../context/product';


class Product extends Component {
    static contextType = ProductsContext;
    
   
    render() { 
        const {productName}= this.props;
        return (
            <div className='text-center'>
            <span className='m-2 text-info mx-5 px-5'>{productName}</span>
            <span className='m-2 badge bg-primary mx-5 px-5'>{this.format()}</span>
            <button onClick={this.handleIncrement} className='m-2 btn btn-sm btn-success mx-5 px-5 '>+</button>
            <button onClick={this.handleDecrement} className='m-2 btn btn-sm btn-warning mx-5 px-5 '>-</button>
            <button onClick={this.handleDelete} className='m-2 btn btn-sm btn-danger mx-5 px-5 '>Delete</button>
            </div>
        );
    }

    format(){
        if(this.props.count === 0){
            return "zero";
        }else{
            return this.props.count;
        }
    }

    handleIncrement = ()=>{
        this.context.onIncrement(this.props.id)
    }
    handleDecrement = ()=>{
        this.context.onDecrement(this.props.id)
    }
    handleDelete = ()=>{
       this.context.onDelete(this.props.id)
    }

}
 
export default Product;