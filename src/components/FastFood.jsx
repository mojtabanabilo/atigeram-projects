import React, { useState } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import { post } from '../server/request';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css';

// styled-components
const CONTAINER = styled.div`
    height: fit-content;
    .add-btn{
        position: absolute;
        left: 49%;
        top: -30%;
        width: 35px;
        height: 35px;
        background: #00ac00;
        line-height: 0;
        border: none;
        border-radius: 10%;
        z-index: 100;
    }
    .edit-btn{
        button{
            width: 25px;
            height: 25px;
            border: none;
            border-radius: 3px;
            line-height: 0;
            cursor: pointer;
        }
        .btn-edit{
            background: #00ac00;
        }
        .btn-remove{
            background: #ff0000;
            margin-top: 3px;
        }
    }
    .send-data{
        width: 80px;
        height: 30px;
        background: #00ac00;
        border: none;
        border-radius: 3px;
        line-height: 0;
        cursor: pointer;
        color: #fff;
    }
`;


const FastFood = ({add, edit, data}) => {
    AOS.init();
    const { addModal, setAddModal } = add;
    const { editModal, setEditModal } = edit;
    const { array, setArray } = data;
    const [loading, setLoading] = useState(false);

    const handleDelete = (name) => {
        const updatedItems = array.filter(item => item.name !== name);
        setArray(updatedItems);
    };
    return (
        <>  
            <CONTAINER data-aos="fade-left" data-aos-delay="150" className='w-75 mt-4 d-flex flex-column justify-content-between align-items-center'>
                <div
                    style={{height: "50px"}} 
                    className='w-100 d-flex justify-content-between align-items-center px-2 border-bottom border-5 border-primary position-relative'
                >
                    <p className='mb-0 fw-bold'>Row</p>
                    <p className='mb-0 fw-bold'>Name</p>
                    <p className='mb-0 fw-bold'>Price</p>
                    <p className='mb-0 fw-bold'>Edit</p>
                    <button className='add-btn' onClick={() => setAddModal(!addModal)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="bi bi-plus-circle-dotted fs-5 text-light"></i>
                    </button>
                </div>
                <div className='w-100 overflow-auto d-flex flex-column justify-content-start align-items-center' style={{height: "350px"}}>
                    {
                        array.length === 0 && <h4 style={{marginTop: "20px" ,textAlign: "center"}}>please add an item for list.</h4>
                    }
                    {
                        array && array.map((items, index) => <div 
                            key={index} 
                            className='edit-btn w-100 d-flex justify-content-between align-items-center px-2 border-bottom border-secondary border-1'
                        >
                                <p className='mb-0 w-50'>{index + 1}</p>
                                <p className='mb-0 w-50'>{items.name}</p>
                                <p className='mb-0 w-50'>{items.price} $</p>
                                <div className='d-flex flex-column py-1'>
                                    <button className='btn-edit' onClick={() => setEditModal(true)}>
                                        <Link to={`/modaledititem/${index + 1}`}>
                                            <i className="bi bi-pencil text-light"></i>
                                        </Link>
                                    </button>
                                    <button className='btn-remove' onClick={() => handleDelete(items.name)}>
                                        <i className="bi bi-x-circle text-light"></i>
                                    </button>
                                </div>
                        </div>
                        )
                    }
                </div>
                
        {
            array.length > 0 && (
                <button className='send-data' onClick={() => {
                  setLoading(true); // تغییر وضعیت به true در هنگام شروع بارگذاری
    
                  post('https://jsonplaceholder.typicode.com/posts', array)
                    .then(response => {
                      setLoading(false); // تغییر وضعیت به false پس از اتمام بارگذاری
                    })
                    .catch(error => {
                      setLoading(false); // تغییر وضعیت به false پس از اتمام بارگذاری (در صورت خطا)
                    });
                }}>
                  {loading ? 'Loading...' : 'send'}
                </button>
            )
        }
            </CONTAINER>
            <ToastContainer 
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
};

export default FastFood;