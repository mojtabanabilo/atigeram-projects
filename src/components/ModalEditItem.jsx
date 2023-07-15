import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const ModalEditItem = ({edit}) => {
    const { editModal, setEditModal } = edit;
    return (
        <Modal show={editModal}>
            <Modal.Header>
                <Modal.Title>Edit Item.</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <InputGroup className="mb-3">
                <InputGroup.Text>name / price</InputGroup.Text>
                <Form.Control aria-label="name" />
                <Form.Control aria-label="price" />
            </InputGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setEditModal(false)}>
                    Close
                </Button>
                <Button variant="primary">
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalEditItem;