import React from 'react';

const Users = () => {
    return (
        <div className='my-5'>
            <h2 className='text-3xl font-bold text-center my-5'>Users of this app</h2>
            <div className='grid md:grid-cols-3 gap-3'>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/Ydj1KT2/brainstorm-meeting.jpg" alt="Students" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Students</h2>
                        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                        <div className="card-actions justify-end">
                            {/* <button className="btn btn-primary">Buy Now</button> */}
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/whxFZQ2/medium-shot-man-working-computer.jpg" alt="Developers" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Developers</h2>
                        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                        <div className="card-actions justify-end">
                            {/* <button className="btn btn-primary">Buy Now</button> */}
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/LvdWLDV/successful-manager.jpg" alt="Bankers" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Bankers</h2>
                        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                        <div className="card-actions justify-end">
                            {/* <button className="btn btn-primary">Buy Now</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;