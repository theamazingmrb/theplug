// 'use client';
import Link from 'next/link';
// import { signOut } from '../services/auth.service';
// import { supabaseServerSide as supabase } from '@/utils/supabase';

export const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='logo'>
                    <Link href='/'>The Plug</Link>
                </div>
                <div className='links'>
                    {/* <Link href='/talent'>Talent</Link> */}
                    <Link href='/talent'>Talent</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/about/team'>Our Team</Link>
                    <Link href='/signup'>Sign up</Link>
                    <Link href='/login'>Log in</Link>
                    {/* <Link href='/' onClick={(e) => {
                        e.preventDefault()
                        supabase.auth.signOut()
                    }}>Log in</Link> */}
                </div>
            </div>
        </header>
    );
};