import { useContext } from 'react';
import ProductsContext from '../../context/product';

const Navbar = (props) => {

    const productsContext =useContext(ProductsContext);

    return (
        <nav className="navbar navbar-dark bg-dark ">
                <div className="container-fluid  justify-content-center">
                    <a href="https://www.google.com" className='navbar-brand ml-5'>
                    Total = {calculatesum()}
                </a>
            </div>
        </nav>
    );
    function calculatesum(){
        let sum=0;
        productsContext.Products.forEach(p=>{
            sum += p.count;
        })
        return sum;
    }
}
 
export default Navbar;