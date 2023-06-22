import React from 'react';
import bannerBg from '../../assets/slider.jpg'
import icon1 from '../../assets/why-icons/ico-1.png'
import icon2 from '../../assets/why-icons/ico-2.png'
import icon3 from '../../assets/why-icons/ico-3.png'
import icon4 from '../../assets/why-icons/ico-4.png'
import icon5 from '../../assets/why-icons/ico-5.png'
import icon6 from '../../assets/why-icons/ico-6.png'
import { useLoaderData } from 'react-router-dom';
import Chef from '../Chef/Chef';

const Home = () => {
    const chefs = useLoaderData()
    const handleClickScroll = () => {
        const element = document.getElementById('chefs-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className='main-wrap'>
            <div className="banner-wrap py-56" style={{ background: `url(${bannerBg}) no-repeat scroll center center / cover` }}>
                <div className="container text-center">
                    <p className='md:text-3xl text-xl ittalic galada text-rose-600 mb-4'>Taste the Difference</p>
                    <h1 className='md:text-6xl text-3xl text-white font-bold'>Fine and Delicious Food</h1>
                    <a onClick={handleClickScroll} className='btn bg-rose-700 hover:bg-rose-800 mt-7'>Explore Our Chefs</a>
                </div>
            </div>

            <div className="why-section py-20">
                <div className="container px-4">
                    <div className="section-title text-center mb-12">
                        <p className='text-slate-400 galada italic text-xl mb-1'>For your comfort</p>
                        <h2 className='text-3xl md:text-4xl font-bold'>Stunning Things</h2>
                    </div>
                    <div className="why-wrap grid md:grid-cols-3 gap-8">
                        <div className="why border shadow-sm hover:shadow-lg transition p-8 rounded-md">
                            <img src={icon1} alt="" className='mb-3' />
                            <h4 className='text-xl font-bold mb-3'>High Quality Foods</h4>
                            <p>We served high quality food for our customer and loved ones.</p>
                        </div>
                        <div className="why border shadow-sm hover:shadow-lg transition p-8 rounded-md">
                            <img src={icon2} alt="" className='mb-3' />
                            <h4 className='text-xl font-bold mb-3'>Inspiring Recipes</h4>
                            <p>We Inspire from our loved ones and customer who loved our recipes.</p>
                        </div>
                        <div className="why border shadow-sm hover:shadow-lg transition p-8 rounded-md">
                            <img src={icon3} alt="" className='mb-3' />
                            <h4 className='text-xl font-bold mb-3'>Salutary Meals</h4>
                            <p>Always we try to impress our cusomers to come again and aganin to take salutary meals</p>
                        </div>
                        <div className="why border shadow-sm hover:shadow-lg transition p-8 rounded-md">
                            <img src={icon4} alt="" className='mb-3' />
                            <h4 className='text-xl font-bold mb-3'>Veteran Foods</h4>
                            <p>We respect who love to take veteran meals and we try our best to served them quality recipes</p>
                        </div>
                        <div className="why border shadow-sm hover:shadow-lg transition p-8 rounded-md">
                            <img src={icon5} alt="" className='mb-3' />
                            <h4 className='text-xl font-bold mb-3'>Easy Ingredients</h4>
                            <p>Our recipes are made with easy ingredients so everyone can cook and taste the best.</p>
                        </div>
                        <div className="why border shadow-sm hover:shadow-lg transition p-8 rounded-md">
                            <img src={icon6} alt="" className='mb-3' />
                            <h4 className='text-xl font-bold mb-3'>Express Delivery</h4>
                            <p>We deliver the recipes book as well as website recipes so you can take your own books for best practice</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="chef-wrap pb-20" id='chefs-section'>
                <div className="container px-4">
                    <div className="section-title text-center mb-12">
                        <p className='text-slate-400 galada italic text-xl mb-1'>Only for You</p>
                        <h2 className='text-3xl md:text-4xl font-bold'>Recipes By Chef</h2>
                    </div>
                    <div className="chefs-wrap grid md:grid-cols-3 gap-8">
                        {
                            chefs.map(chef => <Chef chef={chef} key={chef.id}></Chef>)
                        }

                    </div>
                </div>
            </div>


            <div className="pb-20">
                <div className="container px-4">
                    <div className="section-title text-center mb-12">
                        <p className='text-slate-400 galada italic text-xl mb-1'>We are Best</p>
                        <h2 className='text-3xl md:text-4xl font-bold'>Our Expertise</h2>
                    </div>
                    <div className="progres-wrap grid md:grid-cols-4 gap-8">
                        <div className="option text-center">
                            <div className="radial-progress text-rose-700" style={{ "--value": 80 }}>80%</div>
                            <h2 className='font-bold text-xl mt-4'>Food Variations</h2>
                        </div>
                        <div className="option text-center">
                            <div className="radial-progress text-rose-700" style={{ "--value": 100 }}>100%</div>
                            <h2 className='font-bold text-xl mt-4'>Experience</h2>
                        </div>
                        <div className="option text-center">
                            <div className="radial-progress text-rose-700" style={{ "--value": 90 }}>90%</div>
                            <h2 className='font-bold text-xl mt-4'>Positive Rating</h2>
                        </div>
                        <div className="option text-center">
                            <div className="radial-progress text-rose-700" style={{ "--value": 95 }}>95%</div>
                            <h2 className='font-bold text-xl mt-4'>Happy Customer</h2>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;