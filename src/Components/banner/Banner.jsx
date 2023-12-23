// import React from 'react';
// import { Link } from 'react-router-dom';

// const Banner = () => {
//     // const handleclick=()=>{

//     // }
//     return (
//         <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
//             <div className="hero-overlay bg-opacity-60"></div>
//             <div className="hero-content text-center text-neutral-content">
//                 <div className="max-w-md">
//                     <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
//                     <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//                     <Link to='/login'><button className="btn btn-primary">Let’s Explore</button></Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Banner;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import img from '../../assets/8099209.jpg'


const Banner = () => {
    const { user } = useContext(AuthContext); // Get user data from context

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">TODO</p>
                    {!user ? (
                        <Link to='/login'><button className="btn btn-primary">Let’s Explore</button></Link>
                    ) : (
                        <button className="btn btn-primary" disabled>Already Logged In</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Banner;
