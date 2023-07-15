import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const ModalAddItem = ({add, data}) => {
    const { addModal, setAddModal } = add;
    const { array, setArray, object, setObject } = data;
    return (
        <Modal show={addModal}>
            <Modal.Header>
                <Modal.Title>Add Item.</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <InputGroup className="mb-3">
                <input type="text" name="name" />
                <input type="text" name="price" />
                {/* <InputGroup.Text>name / price</InputGroup.Text>
                <Form.Control aria-label="name" name='name' onChange={e => setObject([e.target.name] : e.target.value)}/>
                <Form.Control aria-label="price" name='price' onChange={e => setObject([e.target.name] : e.target.value)}/> */}
            </InputGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setAddModal(false)}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => setArray()}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalAddItem;