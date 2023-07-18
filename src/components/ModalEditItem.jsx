import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

const INPUTS = styled.input`
    padding: 0 10px;
    border: solid 2px #cacaca;
    border-top: none;
    border-right: none;
    &:focus{
        outline: none;
    }
    &:nth-child(2){
        margin-top: 15px;
    }
`;

const ModalEditItem = ({edit, data}) => {
    const { editModal, setEditModal } = edit;
    const { array, setArray, object, setObject } = data;
    const [editItem, setEditItem] = useState(null);
    const currentItem = useParams();
    console.log(array[+currentItem.id - 1]);
    console.log(editItem);
    
    useEffect(() => {
        setEditItem(array[+currentItem.id - 1])
    }, [])

    return (
        <Modal show={editModal}>
            <Modal.Header>
                <Modal.Title>Edit Item.</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <InputGroup className="mb-3 d-flex flex-column">
                <INPUTS type="text" placeholder='name' name="name" onChange={e => setObject({...object, [e.target.name] : e.target.value, id: array.length + 1})}/>
                <INPUTS type="text" placeholder='price' name="price" onChange={e => setObject({...object, [e.target.name] : e.target.value, id: array.length + 1})}/>
            </InputGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => {
                    setEditModal(false);
                    setEditItem(null);
                }}>
                    <Link to="/fastfood" style={{color: "#fff", textDecoration: "none"}}>
                        Close
                    </Link>
                </Button>
                <Button variant="primary">
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalEditItem;