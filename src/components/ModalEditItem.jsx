import { useState, useContext, useEffect } from 'react';
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { dataProvider } from '../App';
import { Link, useNavigate, useParams } from 'react-router-dom';

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

function ModalEditItem() {
  const {item, setItem, newItem, setNewItem} = useContext(dataProvider);
  const [image, setImage] = useState(null);
  const [uniqueItem, setUniqueItem] = useState(null)
  const params = useParams();
  const navigation = useNavigate();
  console.log(item);


  useEffect(() => {
    setUniqueItem(item[params.id])
  }, [item, newItem])
  
  console.log(uniqueItem);

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'absolute', direction: "rtl"}}
    >
        <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>اعمال تغییرات</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          
          {
            uniqueItem ? <StyledInputs>
            <div>
            <label>نام آیتم:</label>
            <input name="name" type="text" className="inpt-txt"  onChange={e => setUniqueItem(prev => ({...prev ,[e.target.name]: e.target.value}))}/>
        </div>
        <div>
            <label>قیمت:</label>
            <input name="price" type="text" className="inpt-txt"  onChange={e => setUniqueItem(prev => ({...prev ,[e.target.name]: e.target.value}))}/>
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
  </StyledInputs> : <h1>آیتمی وجود ندارد</h1>
}
            
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
            setUniqueItem(null)
            navigation('/', {replace: true})
          }}>بستن</Button>
          <Button variant="primary" onClick={() => {
              item[params.id] = uniqueItem
              console.log(item);
            }}>اعمال تغییرات</Button>
        </Modal.Footer>
      </Modal.Dialog>
      </div>
  );
}

export default ModalEditItem;