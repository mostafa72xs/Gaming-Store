import "./css/header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from "react";
import {faCircleUser , faInfinity} from "@fortawesome/free-solid-svg-icons";





function Header(props){
    return(
        <div className="bg">
            <nav style={{background:"#1E0937"}}>
            <div>
            <FontAwesomeIcon icon={faInfinity} className="logooo"  style={{color: "#B197FC",}} />
                <h1>ARCEADE</h1>
            </div>
            <ul>
                <li><a href="/Store"><button>Products</button></a></li>   
                <li><button href="/">on Sale</button></li>   
                <li><a href="https://www.youtube.com/"><button href="/">GitHub</button></a></li>   
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
