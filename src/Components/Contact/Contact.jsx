import React from 'react';

const Contact = () => {
    return (
        <div className='py-20 grid md:grid-cols-3 gap-5 min-h-screen '>
            <div className="card h-64 w-96 bg-slate-300 text-black">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Phone!</h2>
                    <p>+8001676791320</p>
                    
                   
                </div>
            </div>
            <div className="card  h-64 w-96  bg-slate-300 text-black">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Email!</h2>
                    <p>tania.ahmed08@yahho.com</p>
                    
                   
                </div>
            </div>
            <div className="card  h-64 w-96  bg-slate-300 text-black">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Messenger!</h2>
                    <p></p>
                    
                   
                </div>
            </div>
        </div>
    );
};

export default Contact;