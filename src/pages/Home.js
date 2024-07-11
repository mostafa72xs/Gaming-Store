import React from "react";
import Header from "../components/Header";
import Main from "../components/Main.js";
import Cart from "../components/Cart.js"
import { CartProvider } from 'react-use-cart';
import Footer from '../components/Footer';
import Login from "../components/Login.js"
import { useLogin } from "../components/Hooks/context-login.js";

function Home() {

    const [Logined , setLogined] = useLogin()
    const open = () => {
        setLogined(true)
    }
    return (
    <div>
        <CartProvider>
            <Cart open={open} />
            <Header log={open}/>
            <Main />
            <Footer />
            <Login
            style={Logined ? "backf" : "neon"}
            />
        </CartProvider>
    </div>
    )
    ;
}

export default Home;
