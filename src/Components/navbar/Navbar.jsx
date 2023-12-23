// import React, { useContext } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { AuthContext } from '../provider/AuthProvider';

// const Navbar = () => {
//     const { user, logout } = useContext(AuthContext)
//     const handlesignout = () => {
//         logout()
//             .then()
//             .catch()}
//     const nav = <>
//    {user? && isloggedin?
//     <li><NavLink to='/'>Home</NavLink></li>
//     <li><NavLink to='/dashboard'>Taskboard</NavLink></li>:
//     <li><NavLink to='/'>Home</NavLink></li>
//     }


//     </>
//     return (
//         <div className="navbar bg-base-100">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                     </div>
//                     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                         {nav}
//                     </ul>
//                 </div>
//                 <a className="btn btn-ghost text-xl">daisyUI</a>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     {nav}
//                 </ul>
//             </div>
//             <div className="navbar-end">

//                 {
//                                 user?.email ?

//                                     <><label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//                                         <div className="w-10 rounded-full ">

//                                             <img src={user.photoURL} alt={user.displayName} />

//                                         </div>
//                                         <button className='btn btn-sm btn-ghost'>{user.displayName}</button>
//                                     </label>
//                                         <button onClick={handlesignout} className='btn'>Sign Out</button></> :
//                                     <Link to='/Login'><button className='btn'>Login</button></Link>
//                             }
//                 </div>
//         </div>
//     );
// };

// export default Navbar;
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import image from '../../assets/3d-illustration-pen-putting-blue-ticks-paper.jpg'

const Navbar = () => {
    const { user, logout, isloggedin } = useContext(AuthContext); // Assuming isloggedin is a property indicating the user's login status
    const handlesignout = () => {
        logout()
            .then()
            .catch();
    };

    return (
        <div className="navbar fixed max-w-screen-xl mx-auto bg-opacity-30 bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button"  className="btn  btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                        {user && isloggedin ? (
                            <>
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to='/dashboard'>Taskboard</NavLink></li>
                                <li><NavLink to='/about'>About</NavLink></li>
                                <li><NavLink to='/contact'>Contact</NavLink></li>
                            </>
                        ) : (
                            <>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/about'>About</NavLink></li>
                            <li><NavLink to='/contact'>Contact</NavLink></li>
                            </>
                        )}
                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl">TODO</a> */}
                <div >
                    <img className="w-10  h-10 rounded-full" alt="Tailwind CSS Navbar component" src={image} />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {user && isloggedin ? (
                        <>
                           
                           <li><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to='/dashboard'>Taskboard</NavLink></li>
                                <li><NavLink to='/about'>About</NavLink></li>
                                <li><NavLink to='/contact'>Contact</NavLink></li>
                        </>
                    ) : (
                        <>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                        </>
                    )}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ? (
                        <>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                                <button className='btn btn-sm btn-ghost'>{user.displayName}</button>
                            </label>
                            <button onClick={handlesignout} className='btn'>Sign Out</button>
                        </>
                    ) : (
                        <Link to='/Login'><button className='btn'>Login</button></Link>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;
