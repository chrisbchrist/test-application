import React, {FunctionComponent, useContext} from 'react';
import './Navbar.css';
import { FiBox} from "react-icons/fi";
import {Link} from "react-router-dom";
import {Cart} from "../Cart/Cart";


export const Navbar: FunctionComponent<any> = () => {

    return (
        <nav className="navbar__wrapper">
            <div className="navbar__topbar"/>
            <div className="navbar__content">
                <div className="logo__wrapper">
                    <Link to="/" style={{textDecoration: 'none', color: '#222', display: 'flex'}}>
                    <FiBox className="logo__icon"/>
                    <h1 className="logo__name">La Table</h1>
                    </Link>
                </div>
                <Cart count={1}/>
            </div>
            <div className="navbar__breadcrumbs">
            </div>
        </nav>
    )
}