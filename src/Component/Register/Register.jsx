import React, { useContext, useState } from 'react';
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';

const Register = () => {
    const [showHide, setShowHide] = useState(false);
    const [errorMessage, setErrorMessage] = useState([])
    const [successMessage, setSuccessMessage] = useState([])
    const handleShowHide = () => {
        setShowHide(!showHide)
    }

    const { createUser, setUser, logOut } = useContext(AuthContext);
    const navigate = useNavigate()
    // Register
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setErrorMessage('')
                setSuccessMessage('User Created Successfully')
                updateProfileData(user, name, photo)
                setUser(user)
                logOut()
                navigate('/login')
                toast.success('Register Successfully, Please login Now.', {
                    position: "top-center",
                    autoClose: 10000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
            .catch(error => {
                setSuccessMessage('')
                setErrorMessage(error.message)
            })


        // Add Photo and Name on Registration
        const updateProfileData = (user, name, photo) => {
            updateProfile(user, {
                displayName: name, photoURL: photo
            })
                .then(() => { })
                .catch(error => setErrorMessage(error.message))
        }
    }



    return (
        <div className="bg-base-200 py-20">
            <div className="container px-4">
                <div className="login-wrap">
                    <div className="text-center">
                        <h1 className="text-2xl md:text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provide Your Details Information to Register Your Account</p>
                    </div>
                    <div className="card shadow-2xl md:w-4/12 bg-base-100 mx-auto">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Your Name" name='name' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="Enter Email" name='email' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={showHide ? 'text' : 'password'} placeholder="Enter Password" name='password' className="input input-bordered" required />

                                    <label className="label text-right">
                                        <p onClick={handleShowHide} className="label-text-alt flex items-center gap-2 justify-end"> <FaEye className='text-sm'></FaEye> {showHide ? 'Hide Password' : 'Show Password'}</p>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="url" placeholder="Enter Photo URL" name='photo' className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-rose-700 border-rose-700 hover:border-rose-800 hover:bg-rose-800">Register</button>
                                </div>
                                <div className="text-center text-success font-bold mt-3">
                                    {successMessage}
                                </div>
                                <div className="text-center text-red-800 font-bold mt-3">
                                    {errorMessage}
                                </div>
                                <div className="register-promo">
                                    <p className='font-bold text-center mt-3'>Already Have an Account? Please <Link to='/login' className='text-green-600'>Login</Link></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;