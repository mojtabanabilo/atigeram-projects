import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom';

// styled-components
const UL = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 0;
    li{
        margin: 0 10px;
        list-style-type: none;
        cursor: pointer;
        a{
            text-decoration: none;
            color: #fff;
        }
    }
`;

const Header = ({menu, size}) => {
    const {showMenu, setShowMenu} = menu;
    const {width} = size;
       
    return (
        <Navbar bg="primary" data-bs-theme="dark" className='w-100 h-auto p-3 d-flex justify-content-between align-items-center'>
           <Navbar.Brand>dashboard</Navbar.Brand>
            {
                width < 700 ? <i className="bi bi-list fs-2 text-light" 
                    style={{cursor: "pointer"}}
                    onClick={() => setShowMenu(!showMenu)} 
                ></i> : <UL>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/fastfood">fast food</Link></li>
                    <li><Link to="/drink">drink</Link></li>
                    <li><Link to="/aboutus">about us</Link></li>
               </UL>
            }
        </Navbar>
    );
};

export default Header;