import React, { useState } from 'react';
import styled from 'styled-components';

// styled-components
const ADD = styled.button`
    position: absolute;
    left: 50%;
    top: -30%;
    width: 35px;
    height: 35px;
    background: #00ac00;
    line-height: 0;
    border: none;
    border-radius: 10%;
`;
const BUTTONS = styled.div`
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
`;

const FastFood = ({add, edit}) => {
    const { addModal, setAddModal } = add;
    const { editModal, setEditModal } = edit;
    return (
        <>  
            <div className='w-75 d-flex flex-column justify-content-between align-items-center position-absolute top-50 start-50 translate-middle'>
                <div
                    style={{height: "50px"}} 
                    className='w-100 d-flex justify-content-between align-items-center px-2 border-bottom border-5 border-primary'
                >
                    <p className='mb-0 fw-bold'>Row</p>
                    <p className='mb-0 fw-bold'>Name</p>
                    <p className='mb-0 fw-bold'>Price</p>
                    <p className='mb-0 fw-bold'>Edit</p>
                    <ADD onClick={() => setAddModal(!addModal)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="bi bi-plus-circle-dotted fs-5 text-light"></i>
                    </ADD>
                </div>
                <BUTTONS className='w-100 d-flex justify-content-between align-items-center px-2 border-bottom border-secondary border-1'>
                    <p className='mb-0 w-50'>1</p>
                    <p className='mb-0 w-50'>pitza</p>
                    <p className='mb-0 w-50'>120 $</p>
                    <div className='d-flex flex-column py-1'>
                        <button className='btn-edit'>
                            <i className="bi bi-pencil text-light"></i>
                        </button>
                        <button className='btn-remove'>
                            <i className="bi bi-x-circle text-light"></i>
                        </button>
                    </div>
                </BUTTONS>
            </div>
        </>
    );
};

export default FastFood;