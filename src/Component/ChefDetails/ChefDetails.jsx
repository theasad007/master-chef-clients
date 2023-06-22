import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BreadCumb from '../BreadCumb/BreadCumb';
import { Rating } from '@smastrom/react-rating';
import Recipes from '../Recipes/Recipes';
import LazyLoad from 'react-lazy-load';

const ChefDetails = () => {
    const chef = useLoaderData();
    const { id, name, picture, like, rating, bio, yearsOfExperience, recipes } = chef;
    return (
        <div className="chef-details-area">
            <BreadCumb style={{ backgroubd: 'blue' }}>
                <h2 className='text-white font-bold text-3xl'>Chefs Details</h2>
            </BreadCumb>

            <div className="chef-details-wrap pb-20">
                <div className='container px-4'>
                    <div className="chef-outter flex flex-col md:flex-row gap-8">
                        <div className="chef-details border p-6 rounded-lg md:w-4/12">
                            <div className="chef-img mb-5">
                                <LazyLoad>
                                    <img src={picture} alt="" className='rounded-lg' />
                                </LazyLoad>
                            </div>
                            <div className="chef-info mb-5">
                                <h2 className='text-2xl font-bold mb-4 '>{name}</h2>
                                <p className='mb-4'>{bio}</p>
                                <p><b>Experience:</b> {yearsOfExperience} Years</p>
                            </div>
                            <div className="like-rating grid grid-cols-2 gap-1">
                                <p className='bg-slate-200 rounded-l-md p-3'>Likes: {like}</p>
                                <div className='bg-slate-200 rounded-r-md p-3 text-right flex items-center gap-3'><Rating
                                    readOnly
                                    value={rating}
                                    style={{ maxWidth: 100 }}
                                ></Rating>({rating})</div>
                            </div>
                        </div>
                        <div className="recipes md:w-8/12">
                            <h2 className='text-xl md:text-2xl font-bold'>Recipes by {name} ({recipes.length} Recipes)</h2>
                            <div className='h-[2px] w-[150px] mt-4 mb-10 bg-slate-700'></div>
                            <div className='recipes grid md:grid-cols-3 gap-8'>
                                {
                                    chef.recipes.map(recipe => <Recipes recipe={recipe} id={id} key={recipe.recipeId}></Recipes>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;