import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    // let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation = totalPopulation + country.population;
    // }

    //======>> All Population Addition Using Reduce Method [Start]
        const totalPopulation = cart.reduce((sum, country) => sum + country.population, 0);
    //======>> All Population Addition Using Reduce Method [End]  

    return (
        <div>
            <p style={{fontSize:'25px',fontWeight:'200'}}>This is Cart: {cart.length}</p>
            <p style={{fontSize:'25px',fontWeight:'200'}}>Total Population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;