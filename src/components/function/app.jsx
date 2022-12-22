import Navbar from "./navbar";
import Products from "./products";
import { useState } from "react";
import ProductsContext from "../../context/product"

const App = () => {
    const[products,setProducts] =useState(  
        [
        { id: 1, count: 30, productName: "laptap" },
        { id: 2, count: 50, productName: "airpod" },
        { id: 4, count: 25, productName: "mobile" },
        { id: 5, count: 55, productName: "glass " },
        { id: 7, count: 30, productName: "tablet" },
        { id: 3, count: 440, productName: " ipad " },
        { id: 10, count: 333, productName: " imac " },
        { id: 8, count: 5, productName: "sorface" },
        { id: 9, count: 4, productName: "Mbook" },
        { id: 6, count: 6, productName: "Hphone" },
        ]
     )
    return ( 
        <>
        <ProductsContext.Provider value={{
        Products:products,
        onDelete:handleDelete,
        onIncrement:handleIncrement,
        onDecrement:handleDecrement,
        onReset:handleReset}}
        >
        <Navbar />
        <Products  />
        </ProductsContext.Provider>
        </>
    );
    function handleDelete(productId){
        const newProducts =products.filter(p=> p.id !== productId);
        setProducts(newProducts)
    }

    function handleIncrement(productId){
        const newProducts= [...products];
        const index= newProducts.findIndex(p=> p.id===productId);
        newProducts[index].count +=1;
        setProducts(newProducts);
    }
    function handleDecrement(productId){
        const newProducts= [...products];
        const index= newProducts.findIndex(p=> p.id===productId);
        newProducts[index].count -=1;
        setProducts(newProducts);
    }
    function handleReset(){
        const newProducts= products.map(
            p=>{p.count=0;
            return p
        });
        setProducts(newProducts);
    }
}
 
export default App;