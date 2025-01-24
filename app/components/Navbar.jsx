'use client';
import Link from 'next/link';
import { LoginLink, useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import Image from 'next/image';

const Navbar = () => {
  const { user, isAuthenticated } = useKindeAuth();
  //console.log(user)

  return (
    <div className='bg-indigo-200 shadow-lg py-3'>
      <div className='w-11/12 mx-auto flex justify-between items-center'>
        <div>
          <h2 className='font-bold text-3xl text-red-600'>NB</h2>
        </div>
        <ul className='flex gap-5'>
          <li className='font-medium'><Link href="/">Home</Link></li>
          <li className='font-medium'><Link href="/about">About</Link></li>
          {
            isAuthenticated ? <>
                <li className='font-medium'><Link href="/profile">My Profile</Link></li>
            </> : ""
          }
          <li className='font-medium'><Link href="/contact">Contact</Link></li>
        </ul>
        {isAuthenticated ? (
          <div className='flex items-center'>
            <p className="font-medium hidden sm:block">{user?.given_name || ''}</p>
            <Image src={user?.picture || ''} width={40} height={40} alt='user' className=' rounded-full ml-2'></Image>
          </div>
        ) : (
          <LoginLink>
            <button className='btn'>Login</button>
          </LoginLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
