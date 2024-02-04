import React from "react";
import { Link } from "react-router-dom";
// import { withRouter } from 'react-router'
import './VendingMachine.css';
import vendMachineImg from './VendingMachine.png'


const VendingMachine = () => {
    return (
        <>
            <div className="VendingMachine">
                <h2>Hi, I am a vending machine!</h2>
                <img className='VendMachineImg' alt='Vending Machine' src={vendMachineImg} />
                <h2>Select your snack.</h2>
            </div>
            <div className="VendingMachine-selection">
                {/* NavLinks */}
                <nav className="VendingMachine-nav-links">
                    <Link exact to='/soda'>
                        Soda
                    </Link>
                    <Link exact to='/chips'>
                        Chips
                    </Link>
                    <Link exact to='/candy'>
                        Candy
                    </Link>
                </nav>
            </div>
        </>
    )
}

export default (VendingMachine);  