import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const NavBar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('user sign out successful.');
            })
            .catch(error => {
                console.log(error.message);
            });
    }


    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/signup">Sign Up</NavLink></li>
        {
            user && <li><NavLink to="/orders">Orders</NavLink></li>
        }

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">daisyUI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}

                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            {/* <span>{user.email}</span>
                        <button onClick={handleSignOut} className="btn">Sign Out</button> */}
                            <details className="dropdown dropdown-end">
                                <summary className="btn m-1">Profile</summary>
                                <ul className="menu space-y-1 dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                    <li><Link to="/profile" className='btn'>{user.email}</Link></li>
                                    <li><button onClick={handleSignOut} className="btn">Sign Out</button> </li>
                                </ul>
                            </details>
                        </>
                        : <Link to="/login" className="btn">Login</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;