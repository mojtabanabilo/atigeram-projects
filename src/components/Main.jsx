import React from 'react';
import styled from "styled-components";

// components
import Menu from './Menu';
import Header from './Header';
import Item1 from './Item1';

// styled-componets
const StyledMain = styled.div`
    width: 90vw;
    height: 85vh;
    background: #727272;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .main{
        width: 100%;
        height: 80%;
        background: green;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`; 

const Main = () => {
    return (
        <>  
            <StyledMain>
                    <Header/>
                    <div className='main'>
                        <Item1 />
                        {/* <Menu/> */}
                    </div>
            </StyledMain>
        </>
    );
};

export default Main;