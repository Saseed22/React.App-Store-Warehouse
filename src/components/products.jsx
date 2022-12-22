import React, { Component } from 'react';
import Product from './product';
import ProductsContext from '../context/product';


class Products extends Component {
    static contextType = ProductsContext;
    
    render() { 
        return (
            <>
                <div className="text-center mt-2">
                    <button onClick={this.context.onReset} className='btn btn-danger'>Reset</button>
                </div>
                
                {this.context.Products.map((p,index)=>(
                <Product  id={p.id} key={index} 
                productName={p.productName} 
                count={p.count}/>
            ))}
            </>
        );
    }
    
}
 
export default Products;

