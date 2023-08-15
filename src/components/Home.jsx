import React from 'react';
import resturant from "../assets/logores2.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from "styled-components";

// styled-components
const DIV = styled.div`
    div{
        img{
            width: 100px;
            height: 100px;
            border-radius: 5px;
        }
        span{
            color: #000;
            font-size: 2rem;
            margin-left: 20px;
        }
    }
    div{
        p{
            text-align: justify;
        }
    }
    @media (max-width: 590px) {
        div{
            span{
                font-size: 1.5rem;
            }
        }
    }
    @media (max-width: 410px) {
        div{
            img{
                width: 50px;
                height: 50px;
            }
        }
    }
`;

const Home = () => {
    AOS.init();
    return (
        <DIV className='w-100 h-100 d-flex flex-column justify-content-center align-items-center'>
            <div 
                className='x my-4 bg-white mt-5 rounded-2 w-75 shadow d-flex flex-row justify-content-start align-items-center p-4'
                data-aos="fade-left"
                data-aos-delay="150"
            >
                <img src={resturant} alt="logo"/>
                <span>Resturant</span>
            </div>
            <div 
                style={{textAlign: "justify"}} 
                className='bg-white rounded-2 w-75 shadow d-flex justify-content-start align-items-center p-4'
                data-aos="fade-right"
                data-aos-delay="250"
            >
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deleniti id facilis, et consequuntur ducimus maxime, dolor distinctio perspiciatis minima quisquam. Qui ab unde iusto repudiandae aperiam sunt beatae reiciendis.
                </p>
            </div>
        </DIV>
    );
};

export default Home;