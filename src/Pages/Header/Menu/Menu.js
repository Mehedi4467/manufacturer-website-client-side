import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo/logo.png';
import CustomLink from '../../CustomLink/CustomLink';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Menu = () => {
    const [user] = useAuthState(auth);

    return (
        <div className="container mx-auto navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><CustomLink to='/'>Home</CustomLink></li>
                        <li><CustomLink to='/blog'>Blogs</CustomLink></li>
                        <li><CustomLink to='/portfolio'>My Portfolio</CustomLink></li>
                        {
                            user && <li><CustomLink to='/dashboard'>Dashboard</CustomLink></li>
                        }

                        {
                            user ? <li onClick={() => signOut(auth)} ><button>Log out</button></li> : <li><CustomLink to='/login'>Login</CustomLink></li>
                        }
                    </ul>
                </div>
                <Link to='/'>  <img src={logo} width='90' alt="auto care logo" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><CustomLink to='/'>Home</CustomLink></li>
                    <li><CustomLink to='/blog'>Blogs</CustomLink></li>
                    <li><CustomLink to='/portfolio'>My Portfolio</CustomLink></li>
                    {
                        user && <li><CustomLink to='/dashboard'>Dashboard</CustomLink></li>
                    }

                    {
                        user ? <li onClick={() => {
                            signOut(auth);
                            localStorage.removeItem('accessToken');
                        }} ><button>Log out</button></li> : <li><CustomLink to='/login'>Login</CustomLink></li>
                    }


                </ul>
            </div>
            <div className="navbar-end mr-4">


                {
                    user && <h2 className='text-[#FB4010] text-lg'>{user?.displayName}</h2>
                }
            </div>
        </div>
    );
};

export default Menu;