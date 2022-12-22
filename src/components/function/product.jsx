import { useContext } from 'react';
import ProductsContext from '../../context/product';


const Product = ({productName,count,id,}) => {

    const productsContext =useContext(ProductsContext);

    return (
        <div className='text-center'>
        <span className='m-2 text-info mx-5 px-5'>{productName}</span>
        <span className='m-2 badge bg-primary mx-5 px-5'>{format()}</span>
        <button onClick={handleIncrement} className='m-2 btn btn-sm btn-success mx-5 px-5 '>+</button>
        <button onClick={handleDecrement} className='m-2 btn btn-sm btn-warning mx-5 px-5 '>-</button>
        <button onClick={handleDelete} className='m-2 btn btn-sm btn-danger mx-5 px-5 '>Delete</button>
        </div>
    );

    function format(){
        if(count === 0){
            return "zero";
        }else{
            return count;
        }
    }
    
    function handleIncrement(){
        productsContext.onIncrement(id);
       
    }
    
    function handleDecrement(){
        productsContext.onDecrement(id)
    }
    
    function handleDelete(){
        productsContext.onDelete(id)
    }
    
}


 
export default Product;