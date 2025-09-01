'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; 
import Logo from '@Public/logo.png'; // Adjust the path as necessary
import { useUser } from '@clerk/nextjs';
import SingInButton from './ButtonSingIn';

const NavLandingPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {user} = useUser();
    return (
        <header className="w-full bg-white shadow-sm fixed top-0 z-50">
            <nav className="w-[90%] mx-auto h-16 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image 
                            src={Logo}
                            alt="CloudDocs Logo" 
                            width={40} 
                            height={40}
                        />
                        <span className="text-xl font-bold">CloudDocs</span>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="lg:hidden p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop Navigation Items */}
                <div className="hidden lg:flex items-center space-x-8">
                    <Link href="#How-it-work" className="text-gray-600 hover:text-gray-900">
                        How it Works
                    </Link>
                    <Link href="#Features" className="text-gray-600 hover:text-gray-900">
                        Features
                    </Link>
                    <SingInButton />
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-[5%] z-50">
                        <div className="flex flex-col space-y-4">
                            <Link 
                                href="#How-it-work"
                                className="text-gray-600 hover:text-gray-900 p-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                How it Works
                            </Link>
                            <Link 
                                href="#Features" 
                                className="text-gray-600 hover:text-gray-900 p-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Features
                            </Link>
                            <SingInButton />
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default NavLandingPage;