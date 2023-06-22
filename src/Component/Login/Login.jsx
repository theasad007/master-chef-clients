import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const [showHide, setShowHide] = useState(false);
    const [errorMessage, setErrorMessage] = useState([])
    const [successMessage, setSuccessMessage] = useState([])
    const handleShowHide = () => {
        setShowHide(!showHide)
    }
    const { loginUser, setUser, googleLogin, githublogin } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    // Login with EMail and Pass
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                setErrorMessage('')
                setSuccessMessage('Login Successful')
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                setSuccessMessage('')
                setErrorMessage(error.message)
            })
    }

    // Login with Google
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                setUser(user)
                setErrorMessage('')
                setSuccessMessage('Login Successful')
                navigate(from, { replace: true })
            })
            .catch(error => {
                setSuccessMessage('')
                setErrorMessage(error.message)
            })
    }

    // Login with Github
    const handleGithubLogin = () => {
        githublogin()
            .then(result => {
                const user = result.user;
                setUser(user)
                setErrorMessage('')
                setSuccessMessage('Login Successful')
                navigate(from, { replace: true })
            })
            .catch(error => {
                setSuccessMessage('')
                setErrorMessage(error.message)
            })
    }


    return (
        <div className="bg-base-200 py-20">
            <div className="container px-4">
                <div className="login-wrap">
                    <div className="text-center">
                        <h1 className="text-2xl md:text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provide Username and Password to Login your acoount.</p>
                    </div>
                    <div className="card shadow-2xl md:w-4/12 bg-base-100 mx-auto">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Enter Email" name='email' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={showHide ? 'text' : 'password'} placeholder="Enter Password" name='password' className="input input-bordered" required />

                                    <label className="label text-right">
                                        <p onClick={handleShowHide} className="label-text-alt flex items-center gap-2 justify-end cursor-pointer"> <FaEye className='text-sm'></FaEye> {showHide ? 'Hide Password' : 'Show Password'}</p>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-rose-700 border-rose-700 hover:border-rose-800 hover:bg-rose-800">Login</button>
                                </div>
                                <div className="text-center text-success font-bold mt-3">
                                    {successMessage}
                                </div>
                                <div className="text-center text-red-800 font-bold mt-3">
                                    {errorMessage}
                                </div>
                                <div className="register-promo">
                                    <p className='font-bold text-center mt-3'>Don't Have an Account? Please <Link to='/register' className='text-green-600'>Register</Link></p>
                                </div>
                            </form>
                            <div className="other-login">
                                <p className='divider flex justify-center mb-6'>or</p>
                                <div className="">
                                    <button onClick={handleGoogleLogin} className='btn capitalize w-full mb-4'> <FaGoogle className='mr-3'></FaGoogle> Continue With Google </button>
                                    <button onClick={handleGithubLogin} className='btn capitalize w-full'> <FaGithub className='mr-3'></FaGithub> Continute With Github </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;