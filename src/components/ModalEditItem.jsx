import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

const ModalEditItem = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'absolute', direction: "rtl", zIndex: "100"}}
        >

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                I will not close if you click outside me. Don not even try to press
                escape key.
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>بستن</Button>
                <Button variant="primary">اعمال</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ModalEditItem;