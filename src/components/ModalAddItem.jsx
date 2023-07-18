import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import styled from 'styled-components';

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

const ModalAddItem = ({add, data}) => {
    const { addModal, setAddModal } = add;
    const { array, setArray, object, setObject } = data;

    return (
        <Modal show={addModal}>
            <Modal.Header>
                <Modal.Title>Add Item.</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <InputGroup className="mb-3 d-flex flex-column">
                <INPUTS type="text" placeholder='name' name="name" onChange={e => setObject({...object, [e.target.name] : e.target.value, id: array.length + 1})}/>
                <INPUTS type="text" placeholder='price' name="price" onChange={e => setObject({...object, [e.target.name] : e.target.value, id: array.length + 1})}/>
            </InputGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={async() => {
                    await setAddModal(false)
                    await setObject({})
                }}>
                    Close
                </Button>
                <Button variant="primary" onClick={async() => {
                    await setArray([...array, object]);
                    await setAddModal(false)
                }}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalAddItem;