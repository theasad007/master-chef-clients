import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BreadCumb from '../BreadCumb/BreadCumb';

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <BreadCumb style={{ backgroubd: 'blue' }}>
                <h2 className='text-white font-bold text-3xl'>Welcome, {user.displayName} </h2>
            </BreadCumb>
            <div className="profile-wrap container pb-20">
                <div className="profile-details text-center">
                    <img src={user.photoURL} alt="" className='mb-4 inline' />
                    <h2 className='font-bold text-xl'>Name: {user.displayName}</h2>
                    <p>Email: {user.email}</p>
                    <p>Last SignIn: {user.metadata.lastSignInTime}</p>
                </div>
            </div>

        </div>
    );
};

export default UserProfile;