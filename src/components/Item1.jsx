import React, { useContext, useState } from 'react';
import styled from "styled-components";
import '../assets/icon/bootstrap-icons-1.10.5/font/bootstrap-icons.min.css';
import pic from "../assets/pic.jpg";
import ModalEditItem from "./ModalEditItem";

// context
import { dataProvider } from '../App';

// styled-components
const StyledItem1 = styled.div`
   width: 70%;
   height: 100%;
   background: red;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   .label-button{
        width: 100%;
        height: 15%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: pink;
        padding: 20px;
        label{
            font-size: 1.3rem;
            font-weight: 500;
        }
        button{
            width: 100px;
            height: 30px;
            border: none;
            border-radius: 5px;
            background: #00bb00;
            color: #eee;
        }
   }
   .price-name{
    width: 100%;
    height: 15%;
    background: orange;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
   }
   .name-items{
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-y: scroll;
    /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #727272;
  border-radius: 10px;
}
    .food-name{
        width: 100%;
        height: 20px;
        background: cyan;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        margin: 10px 0;
        p{
            margin-top: 16px;
        }
        img{
            width: 35px;
            height: 35px;
            border-radius: 5px;
        }
        .edit-icons{
            width: fit-content;
            height: 100%;
            background: salmon;
            display: flex;
            justify-content: center;
            align-items: center;
            i{
                font-size: 20px;
                color: #eee;
                line-height: 10px;
                padding: 5px;
                cursor: pointer;
            }
        }
    }
   }
`;

const Item1 = () => {
    const objItem = useContext(dataProvider);
    const { showModal, setShowModal, item, setItem, newItem } = objItem;
    const [edit, setEdit] = useState(false);

    const removeItemFromArray = (array, id) => {
        const remove = array.filter(item => item.newItem.id !== id);
        setItem(remove);
    }
    const handleChange = (ary, id) => {
        const changeItemIndex = ary.findIndex(i => i.newItem.id === id)
        console.log(changeItemIndex);
        setEdit(true)
    };

    return (
        <StyledItem1>
            {
                edit && <ModalEditItem  edit={edit} setEdit={setEdit} ary={item} handleChange={handleChange}/>
            }
            <div className='label-button'>
                <button className='add-btn' onClick={() => setShowModal(!showModal)}>اضافه کردن</button>
                <label>منوی اول</label>
            </div>
                <div className='price-name'>
                    <h6>ویرایش</h6>
                    <h6>تصویر</h6>
                    <h6>قیمت</h6>
                    <h6>نام غذا</h6>
                    <h6>ردیف</h6>
                </div>
                <div className='name-items' dir='rtl'>
                    {
                        item.length === 0  ? <h4>آیتمی برای نمایش وجود ندارد.</h4> : item.map((i, index) => <div className='food-name' key={index}>
                            <p>{index + 1}</p>
                            <p>{i.newItem.name}</p>
                            <p>{i.newItem.price}</p>
                            <img src={pic} alt='pic-food'/>
                            <div className='edit-icons'>
                                <i className="bi bi-pencil" style={{background: "green"}} onClick={() => handleChange(item, i.newItem.id)}></i>
                                <i className="bi bi-x-lg" style={{background: "red"}} onClick={() => removeItemFromArray(item, i.newItem.id)}></i>
                            </div>
                        </div>)
                    }
                </div>
        </StyledItem1>
    );
};

export default Item1;