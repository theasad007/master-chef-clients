import React from 'react';
import breadCumbBg from '../../assets/breadcumb.jpg'

const BreadCumb = ({ children }) => {
    return (
        <div className='py-20 mb-20' style={{ background: `url(${breadCumbBg}) no-repeat scroll center center / cover` }}>
            <div className="container text-center">
                {children}
            </div>
        </div>
    );
};

export default BreadCumb;