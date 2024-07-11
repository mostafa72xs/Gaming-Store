import React from 'react';
import { CartProvider } from 'react-use-cart';
import Cart from '../components/Cart'
import Login from '../components/Login.js';
import MainS from '../components/MainS.js';
import { useLogin } from '../components/Hooks/context-login.js';


function Store() {

    const [Logined ,setLogined] = useLogin();

    const end = () => {
        setLogined(true)
    }

return (
    <div>
        <CartProvider>
        <Cart open={end} />
        <MainS 
        log={end}
        />
        <Login
        style={Logined ? "on" : "off"}
        />
        </CartProvider>
    </div>
)
}

export default Store;