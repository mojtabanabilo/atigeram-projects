import React, {useEffect, useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";

// styled-components
const UL = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 0;
    li{
        margin: 0 10px;
        list-style-type: none;
        color: #fff;
        cursor: pointer;
    }
`;

const Header = ({menu}) => {
    const {showMenu, setShowMenu} = menu;
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
           window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);
       
    return (
        <Navbar bg="primary" data-bs-theme="dark" className='p-3 d-flex justify-content-between align-items-center'>
           <Navbar.Brand>dashboard</Navbar.Brand>
            {
                width < 700 ? <i className="bi bi-list fs-2 text-light" 
                    style={{cursor: "pointer"}}
                    onClick={() => setShowMenu(!showMenu)} 
                ></i> : <UL>
                    <li>home</li>
                    <li>fast food</li>
                    <li>drink</li>
                    <li>about us</li>
               </UL>
            }
        </Navbar>
    );
};

export default Header;