import React from 'react';
import BreadCumb from '../BreadCumb/BreadCumb';

const Blogs = () => {
    return (
        <div>
            <BreadCumb style={{ backgroubd: 'blue' }}>
                <h2 className='text-white font-bold text-3xl'>Blogs</h2>
            </BreadCumb>
            <div className="blogs-wrapper pb-20">
                <div className="container px-4">
                    <div className="blogs">
                        <div className="blog mb-8">
                            <h2 className='font-bold text-2xl mb-4'>1. Tell us the differences between uncontrolled and controlled components.</h2>
                            <p className='mb-3 last:mb-0'> A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.</p>
                            <p className='mb-3 last:mb-0'> A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a "dumb component".</p>
                        </div>
                        <div className="blog mb-8">
                            <h2 className='font-bold text-2xl mb-4'>2. How to validate React props using PropTypes</h2>
                            <p className='mb-3 last:mb-0'>Props types can be validate by using package 'prop-types'. We must install the package and then Define the type for each prop by adding a key to the propTypes object and assigning it a value that represents the expected type</p>
                        </div>
                        <div className="blog mb-8">
                            <h2 className='font-bold text-2xl mb-4'>3. Tell us the difference between nodejs and express js.</h2>
                            <p className='mb-3 last:mb-0'>Node.js is a runtime envoronment for executing JS code outside the web browser. Node.js also allow to write serverside code in JS for both Front end and back end.</p>
                            <p className='mb-3 last:mb-0'>Express.js is framework for building web application that build by depending on node.js Express.js proving routing, middleare and http request handing features.</p>
                        </div>
                        <div className="blog mb-8 last:mb-0">
                            <h2 className='font-bold text-2xl mb-4'>4. What is a custom hook, and why will you create a custom hook?</h2>
                            <p className='mb-3 last:mb-0'>Actually Hook is nothing other than a reusable function. React has many hooks for specific task but if we need any custom task then we create custom hooks so we can reuse it for our task. CUstom Hooks start with use</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;