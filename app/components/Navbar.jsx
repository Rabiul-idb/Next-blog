
import Link from 'next/link';


const Navbar = () => {
    return (
        <div className='bg-indigo-200 shadow-lg py-3'>
            <div className='w-11/12 mx-auto flex justify-between items-center'>
                <div>
                    <h2 className='font-bold text-3xl'>Logo</h2>
                </div>
                <ul className='flex gap-5'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="http://">About</Link></li>
                    <li><Link href="http://">Blogs</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
                
                    <button className='btn'>Login / Register</button>
                
            </div>
        </div>
    );
};

export default Navbar;