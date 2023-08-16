import React from 'react';
import food from "../assets/hamburger.avif";
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';

// styled-components
const DIV = styled.div`
    @media (max-width: 820px) {
        #aboutus-section{
            flex-direction: column;
            div{
                margin-top: 20px;
            }
        }
    }
`;

const AboutUs = ({size}) => {
    const {width} = size;
    AOS.init();
    return (
        <DIV className='w-100 h-100 d-flex flex-column justify-content-center align-items-center'>
           <div id='aboutus-section' className='w-100 h-auto d-flex justify-content-around align-items-center my-3'>
            <img data-aos="flip-left" src={food} style={{maxWidth: width < 412 ? "250px" : "350px", maxHeight: width < 412 ? "250px" : "350px", borderRadius: "50px"}} alt='food'/>
            <div data-aos="zoom-in" style={{textAlign: "justify"}} className={`${width < 820 ? "w-75" : "w-50"} h-auto d-flex flex-column justify-content-start align-items-start rounded-4 bg-body-tertiary shadow-lg p-4`}>
                <h1 className='fw-bolder'>About Us</h1>
                <p className='fs-6 fw-bold text-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Quas, placeat? Fugiat sequi facere alias voluptate voluptas laborum consectetur, 
                    ex assumenda accusamus odit cumque perferendis soluta maxime, ratione, eos veritatis nam?
                </p>
            </div>
           </div>
           <div data-aos="fade-right" style={{textAlign: "justify"}} className='w-75 mt-1 rounded-4 bg-body-tertiary shadow-lg p-4'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati architecto voluptas esse tempore quis in suscipit non laudantium ad eligendi vel aliquid harum ipsam, nam recusandae. Ullam ducimus molestias, temporibus repudiandae nisi veritatis expedita vitae, eligendi, corporis iste similique debitis quas pariatur rem quisquam a quaerat. Quos sint doloremque hic.</p>
           </div>
        </DIV>
    );
};

export default AboutUs;