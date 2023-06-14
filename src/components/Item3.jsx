import React from 'react';
import styled from "styled-components";
import '../assets/icon/bootstrap-icons-1.10.5/font/bootstrap-icons.min.css';

// styled-components
const StyledItem1 = styled.div`
    width: 80%;
    height: 100%;
    border-bottom-left-radius: 10px;
    padding: 20px 30px;
    direction: rtl;
    background: #eee;
    .item-1{
        width: 100%;
        height: 100%;
        margin-top: 30px;
        .price-name{
            width: 60%;
            height: 10%;
            box-shadow: 0px 8px 15px gray;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            border-radius: 10px;
        }
        .name-items{
            width: 60%;
            height: 80%;
            overflow-y: scroll;
            padding-left: 25px;
            /* width */
            ::-webkit-scrollbar {
                width: 5px;
            }

            /* Track */
            ::-webkit-scrollbar-track {
                background: #eee;
            }

            /* Handle */
            ::-webkit-scrollbar-thumb {
                background: #b6b6b6;
            }
            
            /* Handle on hover */
            ::-webkit-scrollbar-thumb:hover {
                background: #555;
            }
            .food-name{
                width: 100%;
                box-shadow: 1px -1px 1px #000 inset;
                padding: 10px;
                border-radius: 5px;
                margin-top: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }
    }
`;

const Item1 = () => {
    return (
        <StyledItem1>
            <h1>منوی اول</h1>
            <div className='item-1'>
                <div className='price-name'>
                    <h1>نام غذا</h1>
                    <h2>قیمت</h2>
                </div>
                <div className='name-items'>
                    <div className='food-name'>
                        <p>پیتزا</p>
                        <p>199000</p>
                    </div>
                    <div className='food-name'>
                        <p>پیتزا</p>
                        <p>199000</p>
                    </div>
                    <div className='food-name'>
                        <p>پیتزا</p>
                        <p>199000</p>
                    </div>
                    <div className='food-name'>
                        <p>پیتزا</p>
                        <p>199000</p>
                    </div>
                    <div className='food-name'>
                        <p>پیتزا</p>
                        <p>199000</p>
                    </div>
                    <div className='food-name'>
                        <p>پیتزا</p>
                        <p>199000</p>
                    </div>
                    <div className='food-name'>
                        <p>پیتزا</p>
                        <p>199000</p>
                    </div>
                    <div className='food-name'>
                        <p>پیتزا</p>
                        <p>199000</p>
                    </div>
                    <div className='food-name'>
                        <p>پیتزا</p>
                        <p>199000</p>
                    </div>
                    <div className='food-name'>
                        <p>پیتزا</p>
                        <p>199000</p>
                    </div>
                    <div className='food-name'>
                        <p>پیتزا</p>
                        <p>199000</p>
                    </div>
                    <div className='food-name'>
                        <p>پیتزا</p>
                        <p>199000</p>
                    </div>
                </div>
            </div>
        </StyledItem1>
    );
};

export default Item1;