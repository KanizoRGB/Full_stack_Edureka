import React from 'react';

import styles from './Product.module.css';

const ProductCard = ()=>{
    return (
        <div className={styles.card}>
            <img 
            src="https://th.bing.com/th/id/OIP._bSekl3N9LDqcHmVbrA2pAHaE8?w=239&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" 
            alt="product" 
            className={styles.productImage} />

            <h2>Amazing Product</h2>
            <p className={styles.price}>$19.99</p>
            <button className={styles.addToCartButton}>Add to Cart</button>
        </div>
        
    );
}

export default ProductCard;