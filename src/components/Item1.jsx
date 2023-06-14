import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom"
import styled from "styled-components";
import '../assets/icon/bootstrap-icons-1.10.5/font/bootstrap-icons.min.css';
import pic from "../assets/pic.jpg";

// context
import { dataProvider } from '../App';

// styled-components
const StyledItem1 = styled.div`
    width: 80%;
    height: 100%;
    border-bottom-left-radius: 10px;
    /* padding: 20px 30px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    direction: rtl;
    background: #eee;
    .label-button{
        width: 60%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        label{
            font-size: 2rem;
            margin-left: 10px;
        }
        button{
            height: 30px;
            border: none;
            font-size: 1rem;
            padding: 5px;
            border-radius: 5px;
            background: #00ac00;
            box-shadow: 3px 3px 10px gray;
            display: flex;
            justify-content: center;
            align-items: center;
            line-height: auto;
            font-weight: bold;
            color: #eee;
            cursor: pointer;
        }
    }
    .item-1{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
            padding-left: 2px;
            h4{
                margin-top: 20px;
            }
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
                height: 80px;
                box-shadow: 1px -1px 1px #000 inset;
                padding: 10px;
                border-radius: 5px;
                margin-top: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-size: 0%.7;
                }
                img{
                    width: 60px;
                    height: 60px;
                    border-radius: 3px;
                }
            }
        }
    }
`;

const Item1 = () => {
    const objItem = useContext(dataProvider);
    
    const navigator = useNavigate();

    return (
        <StyledItem1>
            <div className='label-button'>
                <label>منوی اول</label>
                <button className='add-btn' onClick={() => navigator("/modaladditem")}>اضافه کردن</button>
            </div>
            <div className='item-1'>
                <div className='price-name'>
                    <h4>ردیف</h4>
                    <h4>نام غذا</h4>
                    <h4>قیمت</h4>
                    <h4>تصویر</h4>
                </div>
                <div className='name-items'>
                    {
                        objItem.item.length === 0 ? <h4>آیتمی برای نمایش وجود ندارد.</h4> : objItem.item.map((i, index) => <div className='food-name' key={index}>
                        <p>{index + 1}</p>
                        <p>{i.newItem.name}</p>
                        <p>{i.newItem.price}</p>
                        <img src={pic} alt='pic-food'/>
                    </div>)
                    }
                    
                    
                </div>
            </div>
        </StyledItem1>
    );
};

export default Item1;