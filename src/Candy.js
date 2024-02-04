import React from "react";
import { Link } from "react-router-dom"
import "./Candy.css"
import candyImg from "./candy.jpg"

const Candy = () => {
    return (
        <div className="Candy">
            <h1>Candy</h1>
            <img className="CandyImg" alt="Assortment of different candy" src={candyImg} />
            <h3>SO...DELICIOUS!</h3>
            <nav className="Candy-back">
                <Link to='/'>
                    Go Back
                </Link>
            </nav>
        </div>
    )
}

export default Candy;
