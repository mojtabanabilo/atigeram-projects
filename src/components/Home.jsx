import React from 'react';
import resturant from "../assets/logores2.png"

const Home = () => {
    return (
        <div className='w-100 h-100 d-flex flex-column justify-content-center align-items-center'>
            <div className='my-4 bg-white mt-5 rounded-2 w-75 shadow d-flex flex-row justify-content-start align-items-center p-4'>
                <img 
                    src={resturant} 
                    alt="logo"
                    className='rounded-2'
                    style={{width: "100px", height: "100px"}}
                />
                <span className='text-dark-emphasis mx-3 align-middle fw-bolder fs-3'>Resturant</span>
            </div>
            <div style={{textAlign: "justify"}} className='bg-white rounded-2 w-75 shadow d-flex justify-content-start align-items-center p-4'>
                <p className='lh-sm text-center'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, ab placeat est 
                    molestiae fugiat perferendis sit non assumenda facere accusamus iusto dolorem 
                    architecto nesciunt consectetur obcaecati qui! Ab, molestiae magni. 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt officia molestiae, ex minima illum odit, consectetur rerum dolorum incidunt eius 
                    dolor maxime provident obcaecati architecto ab fugiat quam, voluptatibus expedita.
                </p>
            </div>
        </div>
    );
};

export default Home;