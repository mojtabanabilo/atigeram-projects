import React from 'react';
import styled from "styled-components";

// components
import Menu from './Menu';
import Header from './Header';
import Item1 from './Item1';

// styled-componets
const StyledMain = styled.div`
    .main{
        width: 90vw;
        height: 85vh;
        border-radius: 10px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #eeeeee;
        .main-2{
            height: 85%;
            display: flex;
            border-bottom-right-radius: 10px;
            border-bottom-left-radius: 10px;
        }
    }
`; 

const Main = () => {
    return (
        <>  
            <StyledMain>
                <div className='main'>
                    <Header/>
                    <div className='main-2'>
                        <Item1 />
                        <Menu/>
                    </div>
                </div>
            </StyledMain>
        </>
    );
};

export default Main;