import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const Hamburger = ({menu, size}) => {
    const {setShowMenu} = menu;
    const {width} = size;

    return (
        <div className={`${width < 400 ? 'w-50' : 'w-25'} vh-100 bg-primary bg-gradient p-3 position-absolute top-0 end-0`}>
            <i className="bi bi-x fs-1 text-light"
                style={{cursor: "pointer"}}
                onClick={() => setShowMenu(false)}
            ></i>
            <ul className="list-group list-group-flush d-flex flex-column justify-content-center align-items-center">
                <li className="list-group-item" style={{background: "inherit"}}>
                    <Link to="/" style={{textDecoration: "none", color: "#fff"}}>home</Link>
                </li>
                <li className="list-group-item" style={{background: "inherit"}}>
                    <Link to="/fastfood" style={{textDecoration: "none", color: "#fff"}}>fast food</Link>
                </li>
                <li className="list-group-item" style={{background: "inherit"}}>
                    <Link to="/drink" style={{textDecoration: "none", color: "#fff"}}>drink</Link>
                </li>
                <li className="list-group-item" style={{background: "inherit"}}>
                    <Link to="/aboutus" style={{textDecoration: "none", color: "#fff"}}>about us</Link>
                </li>
            </ul>
        </div>
    );
};

export default Hamburger;