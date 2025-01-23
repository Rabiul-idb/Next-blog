import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-indigo-200 shadow-lg py-3'>
            <div className='w-11/12 mx-auto flex justify-between items-center'>
                <div>
                    <h2 className='font-bold text-3xl'>Logo</h2>
                </div>
                <ul className='flex gap-5'>
                    <li><a href="#">Home</a></li>
                    <li><a href="http://">About</a></li>
                    <li><a href="http://">Blogs</a></li>
                    <li><a href="http://">Contact</a></li>
                </ul>
                <div>
                    <button className='btn'>Login / Register</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;