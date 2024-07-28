import "./css/header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from "react";
import {faCircleUser} from "@fortawesome/free-solid-svg-icons";

import { GiOverInfinity } from "react-icons/gi";




function Header(props){
    return(
        <div className="bg">
        <nav>
            <div className="logo">
            <GiOverInfinity className="logooo" />
                    <h1>ARCEADE</h1>
            </div>
                <ul>
                    <li><a href="/Store">Products</a></li>   
                    <li><a href="/">onSale</a></li>   
                    <li><a href="https://github.com/mostafa72xs/Gaming-Store">GitHub</a></li>   
                    <li><button onClick={props.log}><FontAwesomeIcon icon={faCircleUser} />login</button></li>
                </ul>
        </nav>
            <div>
                <div className="img">
                </div>
                <div className="pw">
                    <div>
                        <h3>Power up your game</h3>
                        <h1>CYBERPUNK 2077 <br />INFINTIE</h1>
                        <h3>now available on PC & CONSOLE</h3>
                        <a href="/Store"><button>Buy Now</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;