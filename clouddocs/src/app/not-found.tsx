'use client';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 flex items-center justify-center p-4">
            <div className="max-w-3xl w-full text-center">
                {/* Animated 404 Number */}
                <div className="relative mb-8">
                    <h1 className="text-[150px] md:text-[200px] font-bold">
                        <span className="inline-block animate-bounce-slow bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">4</span>
                        <span className="inline-block animate-pulse bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">0</span>
                        <span className="inline-block animate-bounce-slow bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">4</span>
                    </h1>
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-3xl opacity-20 bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse"></div>
                </div>

                {/* Content */}
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4 animate-fade-in-up">
                    Page Not Found
                </h2>
                <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto animate-fade-in-up">
                    The page you're looking for doesn't exist or has been moved.
                    Let's get you back on track.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
                    <Link 
                        href="/"
                        className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        <Home className="w-5 h-5" />
                        Back to Home
                    </Link>
                    <button 
                        onClick={() => window.history.back()}
                        className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NotFound;