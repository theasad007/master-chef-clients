import React, { useContext } from 'react';
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import { AuthContext } from '../../providers/AuthProvider';
import defaultAvatar from '../../assets/profile.png'
import { toast } from 'react-toastify';

const Header = () => {
  const { user, setUser, logOut } = useContext(AuthContext);
  console.log(user)
  const navigate = useNavigate();
  // Logout from Header Profile
  const handleLogOut = () => {
    logOut()
      .then(() => {
        setUser(null);

        toast.success('Log Out Succesfully', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate('/')
      })
  }
  return (
    <div className="container ">
      <div className="navbar bg-base-100">
        <div className="navbar-start" style={{ width: '70%' }}>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden px-0 pr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <ActiveLink to='/'>Home</ActiveLink>
              </li>
              <li>
                <ActiveLink to='/blogs'>Blogs</ActiveLink>
              </li>
            </ul>
          </div>
          <Link to='/' className="text-xl md:text-2xl galada font-bold italic text-rose-700 w-60">Master Chef</Link>
        </div>

        <div className="navbar-end">
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <ActiveLink to='/'>Home</ActiveLink>
              </li>
              <li>
                <ActiveLink to='/blogs'>Blogs</ActiveLink>
              </li>
            </ul>
          </div>
        </div>
        {user ? <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full " >
              <img src={user.photoURL ? user.photoURL : defaultAvatar} title={user?.displayName} />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-56">

            <li className='p-4 text-xl font-bold'>{user?.displayName}</li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li><a onClick={handleLogOut}>Logout</a></li>
          </ul>
        </div> :
          <Link to='/login' className="btn ml-3 bg-rose-700 border-rose-700 hover:bg-rose-800 hover:border-rose-800">
            Login
          </Link>
        }
      </div>
    </div>
  );
};

export default Header;