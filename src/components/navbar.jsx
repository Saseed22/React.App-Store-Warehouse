import React, { Component } from 'react';
import productContext from '../context/product';

class Navbar extends Component {
    static contextType=productContext;
    state = {  } 
    render() { 
        return (
            <nav className="navbar navbar-dark bg-dark ">
                <div className="container-fluid  justify-content-center">
                    <a href="https://www.google.com" className='navbar-brand ml-5'>
                        Total = {this.calculatesum()}
                    </a>
                </div>
            </nav>
        );
    }
    calculatesum=()=>{
        let sum=0;
        this.context.Products.forEach(p=>{
            sum += p.count;
        })
        return sum;
    }
}
 
export default Navbar;