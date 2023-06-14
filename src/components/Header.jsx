import React from 'react';
import styled from "styled-components";
import '../assets/icon/bootstrap-icons-1.10.5/font/bootstrap-icons.min.css';
import pic from "../assets/pic.jpg";

// styled-components
const StyledHeader = styled.div`
    width: 100%;
    height: 15%;
    background: #3983f3;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    .info{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            height: 100%;
            padding-right: 20px;
            img{
                width: 70px;
                height: 70px;
                border-radius: 50%;
            }
            h1{
                margin-right: 20px;
                color: #ffffff;
            }
        }
        .icon{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            i{
                cursor: pointer;
                font-size: 50px;
                transition: all .3s;
                color: #ffffff;
                &:hover{
                    transform: rotateZ(90deg);
                    transition: all .3s;
                }
            }
        }
`;
const Header = () => {
    return (
        <StyledHeader>
            <div className='info'>
                <h1>رستوران</h1>
                <img src={pic} alt="logo"/>
            </div>
        </StyledHeader>
    );
};

export default Header;

// #85aaaa
// #0d1111