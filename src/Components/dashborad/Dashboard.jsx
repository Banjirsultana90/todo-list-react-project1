// import React from 'react';
// import { NavLink, Outlet } from 'react-router-dom';

// const Dashboard = () => {
//     return (
//         <div className='flex gap-5'>
//             <div className="w-1/3 min-h-screen bg-purple-600 text-white  py-5 px-5">

//                 <ul>
//                     <li><NavLink to='/dashboard/createtask'>Create Task</NavLink></li>
//                     <li><NavLink to='/dashboard/alltask'>All Task</NavLink></li>
//                     <li><NavLink to='/'>Home</NavLink></li>
//                 </ul>
//             </div>
//             <div className='w-2/3'>
//                 <Outlet></Outlet>
//             </div>
//         </div>
//     );
// };

// export default Dashboard; 
import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


const Dashboard = () => {
    const { user } = useContext(AuthContext); // Get user data from context

    return (
        <div className='flex gap-2 '>
            <div className=" w-full md:w-1/4 md:min-h-screen bg-purple-600 text-white  py-5 px-5">
                <div>
                    {/* Display user profile picture */}
                    {user && (
                        <div>
                            <img
                                src={user.profilePicture}
                                alt={user.displayName}
                                className="rounded-full bg-slate-500 h-16 w-16 mb-2"
                            />
                            <p>{user.displayName}</p>
                        </div>
                    )}
                </div>
                <ul>
                    <li><NavLink to='/dashboard/createtask'>Create Task</NavLink></li>
                    <li><NavLink to='/dashboard/alltask'>All Task</NavLink></li>
                    <li><NavLink to='/'>Home</NavLink></li>
                </ul>
            </div>
            <div className=' w-full md:w-3/4 '>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
