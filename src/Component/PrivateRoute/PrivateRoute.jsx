import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import loadingGIF from '../../assets/loading.gif'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="container px-4">
                <div className="loading text-center py-8">
                    <img src={loadingGIF} alt="" className='inline w-20 mb-5' />
                    <p>Loading...</p>
                </div>
            </div>
        )
    }
    if (user) {
        return children;
    }

    return (
        <Navigate to='/login' state={{ from: location }} replace>

        </Navigate>
    );
};

export default PrivateRoute;