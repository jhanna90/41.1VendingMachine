import React from "react";
import { Link } from "react-router-dom";
import "./Soda.css"
import sodaImg from './Soda.png'

const Soda = () => {
    return (
        <div className="Soda">
            <h1>Soda</h1>
            <img className="SodaImg" alt="Coca Cola" src={sodaImg} />
            <h3>SO MUCH SUGAR!!</h3>
            <nav className="Soda-back">
                <Link to='/'>
                    Go Back
                </Link>
            </nav>
        </div>
    )
}

export default Soda;