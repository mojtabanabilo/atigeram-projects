import React from 'react';
import styled from "styled-components";
import '../assets/icon/bootstrap-icons-1.10.5/font/bootstrap-icons.min.css';

// styled-components
const StyledMenu = styled.div`
    width: 20%;
    height: 100%;
    background: #9e9e9e;
    border-bottom-right-radius: 10px;
    color: #fff;
    padding-top: 30px;
    .menu-ul{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            li{
                list-style-type: none;
                font-size: 1.5rem;
                cursor: pointer;
                transition: all .5s;
                &:hover{
                    border-bottom: solid 3px #fff;
                    transition: all .2s;
                }
            }
        }
        .icon{
            i{
                cursor: pointer;
                font-size: 50px;
                position: absolute;
                top: 3%;
                left: 95%;
                transform: translate(-95%, -3%);
                transition: all .3s;
                &:hover{
                    font-size: 55px;
                    transition: all .3s;
                }
            }
        }
`;

const Menu = ({items}) => {
    return (
        <StyledMenu>
            <ul className='menu-ul'>
                <li name="home" onClick={(e) => items.setPage({...Object.values(items.page) === false, [e.target.name]: true})}>خانه</li>
                <li name="item1" onClick={(e) => items.setPage({...Object.values(items.page) === false, [e.target.name]: true})}>فهرست 1</li>
                <li name="item2" onClick={(e) => items.setPage({...Object.values(items.page) === false, [e.target.name]: true})}>فهرست 2</li>
                <li name="item3" onClick={(e) => items.setPage({...Object.values(items.page) === false, [e.target.name]: true})}>فهرست 3</li>
                <li name="support" onClick={(e) => items.setPage()}>پشتیبانی</li>
            </ul>
        </StyledMenu>
    );
};

export default Menu;

// style={{
//     cursor: "pointer",
//     fontSize: "50px",
//     position: "absolute",
//     top: "3%",
//     left: "95%",
//     transform: "translate(-95%, -3%)"
// }}