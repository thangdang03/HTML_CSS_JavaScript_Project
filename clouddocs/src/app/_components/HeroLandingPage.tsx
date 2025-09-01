'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import heroBanner from '@Public/banners/heroBanner.png';
import Link from 'next/link';
import GetStartButton from './GetStartButton';

const HeroLandingPage = () => {
    return (
        <section className="min-h-screen  flex justify-center items-center px-4 py-10">
            <motion.div 
                className="w-[90%] bg-white overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12">
                    {/* Left Content */}
                    <motion.div 
                        className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1 
                            className="text-4xl lg:text-6xl font-bold mb-6 text-gray-800"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Create and Share Documents in the Cloud
                        </motion.h1>
                        <motion.p 
                            className="text-lg lg:text-xl mb-8 text-gray-600"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Experience seamless collaboration with our intuitive cloud-based document platform
                        </motion.p>

                       {/* Buttons Section */}
                        <motion.div 
                            className="flex flex-col cursor-pointer sm:flex-row gap-4 justify-center lg:justify-start"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <GetStartButton/>
                            <Link
                                href="#Features"
                                className="px-8 cursor-pointer py-3 bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-300"     
                                onClick={() => window.scrollTo({ top: document.getElementById('Features')?.offsetTop, behavior: 'smooth' })}
                            
                            >
                                Learn More
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div 
                        className="lg:w-1/2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full">
                            <Image
                                src={heroBanner} 
                                alt="Cloud Documentation Platform"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

export default HeroLandingPage;