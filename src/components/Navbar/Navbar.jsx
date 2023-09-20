import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
import { useContext } from 'react';
import { authContext } from '../Providers/AuthProvider';
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const { user, loading, userLogout } = useContext(authContext)
    return (
        <header className='bg-base-100 sticky top-0 z-50 flex justify-center'>
            <div className='container'>
                <div className="navbar px-0">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-circle btn-ghost lg:hidden mr-1">
                                <i className='bi bi-list text-2xl'><FaBars /></i>
                            </label>
                            <ul tabIndex={0} className="dropdown-content mt-1 w-52 menu menu-compact p-2 bg-base-200 shadow rounded-box">
                                <li >
                                    <NavLink to={'/'} onClick={() => { document.getElementById('menu2').classList.toggle('hidden') }}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/all-toys'} onClick={() => { document.getElementById('menu2').classList.toggle('hidden') }}>All Toys</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/my-toys'} onClick={() => { document.getElementById('menu2').classList.toggle('hidden') }}>My Toys</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/add-toy'} onClick={() => { document.getElementById('menu2').classList.toggle('hidden') }}>Add Toy</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/blog'} onClick={() => { document.getElementById('menu2').classList.toggle('hidden') }}>Blog</NavLink>
                                </li>
                            </ul>
                        </div>

                        <img src="/logo.png" className='h-12 max-[380px]:h-10' />
                        <a className="normal-case text-3xl max-[380px]:text-2xl font-extrabold text-black" href="/">
                            <label className="cursor-pointer font-extrabold text-[#ED1C24]">T</label>
                            <label className="cursor-pointer font-extrabold text-slate-600">oy</label>
                            <label className="cursor-pointer font-extrabold text-[#ED1C24]">B</label> 
                            <label className="cursor-pointer font-extrabold text-slate-600">izz</label>
                        </a>
                    </div>
                    <div id='navbar' className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-1 font-medium flex items-center gap-5">
                            <NavLink to={'/'} className=''>Home</NavLink>
                            <NavLink to={'/all-toys'} className=''>All Toys</NavLink>
                            {user &&
                                <>
                                    <NavLink to={'/my-toys'} className=''>My Toys</NavLink>
                                    <NavLink to={'/add-toy'} className=''>Add Toy</NavLink>
                                </>
                            }

                            <NavLink to={'/blog'} className=''>Blog</NavLink>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div>
                            {!loading && !user &&
                                <Link to={'/login'} className="btn bg-[#ED1C24] hover:bg-red-500 border-none" >Sign In </Link>
                            }

                            {user &&
                                <div className="dropdown dropdown-end text-black tooltip tooltip-bottom" data-tip={user?.displayName}>
                                    <label tabIndex={0} className="btn bg-slate-400 border-none btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={!loading &&
                                                (user?.photoURL) ? user.photoURL : 'https://i.ibb.co/Zgy5Z7H/user.png'} />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                                        <li><a onClick={() => userLogout()}>Logout</a></li>
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;