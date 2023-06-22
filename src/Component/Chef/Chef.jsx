import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    const { id, name, picture, recipes, like, rating, yearsOfExperience } = chef;
    return (
        <div className="chefs rounded-lg border p-4">
            <div className="chef-img mb-4">
                <LazyLoad> 
                    <img src={picture} alt="" className='rounded-lg' />
                </LazyLoad>
            </div>
            <div className="chef-details">
                <h3 className='text-2xl font-bold mb-2'>{name}</h3>
                <p className='text-xl'>Experience: {yearsOfExperience} Years</p>
                <div className="mt-4 like-rating grid md:grid-cols-3 gap-2 text-center">
                    <p className='bg-slate-200 rounded-md p-3 font-bold'>Likes: {like}</p>
                    <p className='bg-slate-200 rounded-md p-3 font-bold'>Rating: {rating}</p>
                    <p className='bg-slate-200 rounded-md p-3 font-bold'>Recipes: {recipes.length}</p>
                </div>

                <Link to={`chef/${id}`} className='btn w-full mt-5 bg-rose-700 border-rose-700 text-white hover:bg-rose-800 hover:border-rose-800 hover:text-white'>View Recipes</Link>
            </div>

        </div>
    );
};

export default Chef;