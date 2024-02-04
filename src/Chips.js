import React from "react";
import { Link } from "react-router-dom"
import "./Chips.css"
import chipsImg from "./Chips.png"

const Chips = () => {
  return (
    <div className="Chips">
      <h1>Chips</h1>
      <img className="ChipsImg" alt="Bag of Lay's Original Potato Chips" src={chipsImg} />
      <h3>SO MUCH SALT!!</h3>
      <nav className="Chips-back">
        <Link to='/'>
          Go Back
        </Link>
      </nav>
    </div>
  )
}

export default Chips;