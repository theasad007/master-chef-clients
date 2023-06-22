import React from 'react';
import notFound from '../../assets/404.jpg'
import BreadCumb from '../BreadCumb/BreadCumb';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="page-wrapper">
            <BreadCumb style={{ backgroubd: 'blue' }}>
                <h2 className='text-white font-bold text-3xl'>404 Not Found</h2>
            </BreadCumb>
            <div className='container px-4 pb-20 text-center'>
                <div className="not-found-wrap flex justify-center">
                    <img src={notFound} alt="" />
                </div>
                <h4 className='text-xl mb-5'>The content you are looking can not be found</h4>
                <Link><button className='btn'>Back to Home</button></Link>
            </div>
        </div>

    );
};

export default NotFound;