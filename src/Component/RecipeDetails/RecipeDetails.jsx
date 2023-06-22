import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BreadCumb from '../BreadCumb/BreadCumb';
import { toast } from 'react-toastify';
import LazyLoad from 'react-lazy-load';
import { createRef } from 'react';
import ReactToPdf from 'react-to-pdf';

const RecipeDetails = () => {
    const [favorite, setFavorite] = useState(false)
    const recipeDetails = useLoaderData();
    const { name, image, ingredients, instructions } = recipeDetails;

    const handleFavorite = (event) => {
        toast.success('The Recipe Added to Favorite!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        event.target.disabled = true;
    }

    const ref = createRef();
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [8.5, 11]
    };
    return (
        <div>
            <BreadCumb style={{ backgroubd: 'blue' }}>
                <h2 className='text-white font-bold text-3xl'>{name}</h2>
            </BreadCumb>
            <div className="container px-4 pb-20" ref={ref}>
                <div className="recipe-wrapper flex flex-col md:flex-row justify-between gap-8">
                    <div className="recipe-basic md:w-5/12 border rounded-lg p-4">
                        <LazyLoad>
                            <img src={image} alt="" className='rounded-lg w-full' />
                        </LazyLoad>
                    </div>
                    <div className="recipe-details md:w-7/12 border rounded-lg p-8 flex flex-col">
                        <h2 className='text-xl md:text-2xl font-bold'>Recipe Name: {name}</h2>
                        <div className='h-[2px] w-[150px] mt-4 mb-5 bg-slate-700'></div>
                        <div className="making-details grid md:grid-cols-2 gap-5 mb-10">
                            <div className="ingredients">
                                <h3 className='font-bold text-xl mb-4'>Ingredients:</h3>
                                <ul>
                                    {
                                        ingredients.map((ingredient, idx) => <li className='list-disc ml-5' key={idx}>{ingredient}</li>)
                                    }
                                </ul>
                            </div>
                            <div className="instructions">

                                <h3 className='font-bold text-xl mb-4'>Making Instructions:</h3>
                                <ul>
                                    {
                                        instructions.map((instruction, idx) => <li className='list-disc ml-5' key={idx}>{instruction}</li>)
                                    }
                                </ul>
                            </div>
                        </div>

                        <div className="mt-auto flex flex-col gap-2">
                            <ReactToPdf targetRef={ref} filename={`${name}.pdf`} options={options} x={.5} y={.5} scale={0.6}>
                                {({ toPdf }) => (
                                    <button onClick={toPdf} className='w-full btn rounded-r-lg'>Generate pdf</button>
                                )}
                            </ReactToPdf>
                            <button onClick={handleFavorite} className='w-full btn rounded-lg' >Add To Favorite</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;