import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const Header = ({menu}) => {
    const {showMenu, setShowMenu} = menu;
    return (
        <Navbar bg="primary" data-bs-theme="dark" className='p-3 d-flex justify-content-between align-items-center'>
           <Navbar.Brand>dashboard</Navbar.Brand>
           <i className="bi bi-list fs-2 text-light" 
            style={{cursor: "pointer"}}
            onClick={() => setShowMenu(!showMenu)} 
           ></i>
        </Navbar>
    );
};

export default Header;