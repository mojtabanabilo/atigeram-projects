import { useContext, useState } from "react";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

// context
import { dataProvider } from "../App";

// styled-components
const StyledInputs = styled.div`
    width: 100%;
    div{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 10px;
        label{
            margin-left: 10px;
        }
        .inpt-txt{
            border-radius: 3px;
            padding: 0 10px;
            border: solid #c9c9c9 2px;
            &:focus{
                outline: none;
            }
        }

    }
    .upload-image{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        img{
            width: 50px;
            height: 50px;
        }
        i{
            font-size: 25px;
            cursor: pointer;
            margin-right: 10px;
        }
        .upload-btn{
            width: fit-content;
            border-radius: 5px;
            border: solid 2px #c9c9c9;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-right: 10px;
        }
    }
`;

function ModalAddItem() {
    const objItem = useContext(dataProvider);
    const {newItem, setNewItem, item, setItem, setShowModal} = objItem;
    const [image, setImage] = useState(null);

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'absolute', direction: "rtl"}}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>لطفا مقادیر را وارد کنید</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <StyledInputs>
            <div>
                <label>نام آیتم:</label>
                <input name="name" type="text" className="inpt-txt" onChange={e => setNewItem({...newItem, [e.target.name] : e.target.value})}/>
            </div>
            <div>
                <label>قیمت:</label>
                <input name="price" type="text" className="inpt-txt" onChange={e => setNewItem({...newItem, [e.target.name] : e.target.value})}/>
            </div>
            <div className="upload-image">
                <label>عکس:</label>
                {
                    image ? <div className="image-remove">
                        <img src={image} alt="food-image"/>
                        <i className="bi bi-trash" onClick={() => setImage(null)}></i>
                    </div> : <div className="upload-btn">
                        <label htmlFor="input-file" style={{cursor: "pointer"}}>
                            بارگذاری عکس
                        </label>
                        <input 
                            type="file"
                            id="input-file" 
                            style={{display: "none"}}
                            name="image"
                            onChange={e => {
                                setImage(URL.createObjectURL(e.target.files[0]));
                                setNewItem({...newItem, [e.target.name] : e.target.value});
                            }}
                        />
                    </div>
                }
                
            </div>
          </StyledInputs>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>لغو</Button>
          <Button variant="primary" onClick={() => {
            setNewItem({...newItem, id: item.length + 1});
            newItem && setItem(prev => [...prev,{newItem}])
          }}>ذخیره</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default ModalAddItem;