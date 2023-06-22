import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const Recipes = (props) => {
    const { recipeId, name, image } = props.recipe;
    const id = props.id;
    return (
        <div className="recipe">
            <LazyLoad>
                <img src={image} alt="" className='rounded-lg' />
            </LazyLoad>
            <h2 className='font-bold mt-3 text-md'>{name}</h2>
            <Link to={`/chef/${id}/recipes/${recipeId}`} className='btn btn-sm mt-4 bg-rose-700 border-rose-700 hover:bg-rose-800 hover:border-rose-800' >View Details</Link>
        </div>
    );
};

export default Recipes;