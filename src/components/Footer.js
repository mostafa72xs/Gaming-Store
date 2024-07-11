import React from 'react';
import "./css/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfinity } from '@fortawesome/free-solid-svg-icons';

function Footer() {
return (
    <div>
        <div className='first'>
            <div className='text-xl'>
            <FontAwesomeIcon icon={faInfinity} className="logooo"  style={{color: "#B197FC",}} />
                <h1>ARCEADE</h1>
            </div>
            <div className='tex2'>
                <li><button>Products</button></li>
                <li><button>On Sale</button></li>
                <li><button>Gears</button></li>
                <li><button>Games</button></li>
                <li><button>About us</button></li>
            </div>
            <div>
                © ARCEADE Inc. All rights reserved.
            </div>
        </div>
        <div></div>
    </div>
)
}

export default Footer;