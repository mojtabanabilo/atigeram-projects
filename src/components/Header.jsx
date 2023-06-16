import React from 'react';
import styled from "styled-components";
import '../assets/icon/bootstrap-icons-1.10.5/font/bootstrap-icons.min.css';
import pic from "../assets/pic.jpg";

// styled-components
const StyledHeader = styled.div`
    width: 100%;
    height: 20%;
    background: #3983f3;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 20px;
    img{
        width: 70px;
        height: 70px;
        border-radius: 10px;
    }
    h2{
        margin-right: 20px;
        color: #ffffff;
    }
`;
const Header = () => {
    return (
        <StyledHeader>
            <h2>رستوران</h2>
            <img src={pic} alt="logo"/>
        </StyledHeader>
    );
};

export default Header;

// #85aaaa
// #0d1111