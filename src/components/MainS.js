import React , { useState , useEffect } from 'react';
import "../components/css/Store.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./css/Store.css"
import {faCircleUser, faInfinity} from "@fortawesome/free-solid-svg-icons";
import allCards from "../components/Hooks/productsall"
import Itemcard from '../components/Itemcard';


function MainS (props) {
    const [cards, setCards] = useState(allCards);
    const [currentCard, setCurrentCard] = useState("All");
    const [ head , setHead ] = useState("All products") 


    const handleBtns = (e) => {
        let word = e.target.value;
        setCurrentCard(word);
        let i = e.target.id
        setHead(i)
};

        
    
    useEffect(() => {
        if (currentCard === "All") {
        setCards(allCards);
    }
    else {
        const filtered = allCards.filter((card) => {
        return (
            card.category === currentCard || card.category.includes(currentCard)
        );
        });
        setCards(filtered);
      }
    }, [currentCard]);


    return(
        
        <div id='Store'>
        <nav>
            <div>
                <FontAwesomeIcon icon={faInfinity} className="logooo"  style={{color: "#B197FC",}} />
                <h1>ARCEADE</h1>
            </div>
            <ul>
            <li><a  href="/"><button>Home</button></a></li>   
            <li><button href="/">GitHub</button></li>   
            <li><button href="/">contact Us</button></li>   
            <li><button onClick={props.log} ><FontAwesomeIcon icon={faCircleUser} />login</button></li>
            </ul>
        </nav>
        <div className='arrows'>
            <p><a href="/">Home</a> / products</p>
        </div>
        <div className='mainbar'>
            <section class="products">
                <div className="hb">
                    <h1>Browse by</h1>
                </div>
                <div>
                    <ul>
                        <li><button value="All" onClick={handleBtns} id="All Products" href="/Store" >All Products</button></li>
                        <li><button value="gear" onClick={handleBtns} id="Acccessories" href="/Store">Accessories</button></li>
                        <li><button value="All" onClick={handleBtns} id="Best Seller" href="/Store">Best Seller</button></li>
                        <li><button value="consoles" onClick={handleBtns} id="Consoles" href="/">Consols</button></li>
                        <li><button value="controller" onClick={handleBtns} id="Controller" href="/">Controller</button></li>
                        <li><button value="games" onClick={handleBtns} id="Games" href="/">Games</button></li>
                    </ul>
                </div>
            </section>
            <div className="product-list">
                <h1 className='noob'>{head}</h1>
                <div className='filter'>
                    <p>All Products </p>
                </div>
                <div className='grid'>
                    {cards.map((items , index) => {
                    return (
                    <Itemcard
                    Name={items.Name}
                    price={items.price}
                    image={items.image}
                    key={index.id}
                    item={items}
                    />
                    );
                })}
                </div>
            </div>
        </div>
    </div>
    )
}

export default MainS
