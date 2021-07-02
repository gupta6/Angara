import React, {Component} from 'react';
import ProductMedia from './ProductMedia';
import ProductDescription from './ProductDescription';
import classes from './css/Product.module.css'

class Product extends Component{
    render(){
        return(
            <div className={classes.Product}>
                <ProductMedia/>
                <ProductDescription/>
            </div>
            
        );
    }
}

export default Product;