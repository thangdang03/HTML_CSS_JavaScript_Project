import Image from "next/image";
import Link from "next/link";
import heroBanner from "../../public/banners/heroBanner.png";


const Hero = () => {

    return (  
        <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/hero-bg.jpg"
              alt="Background"
              fill
              className="object-cover opacity-5"
              priority
            />
          </div>
          <div className="relative max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Text Content */}
              <div id="hero-text" className="text-center lg:text-left order-2 lg:order-1">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 lg:mb-8">
                  Collaborate Seamlessly with Your Team
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0">
                  A modern workspace where teams can create, share, and collaborate on documents in real-time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:min-w-[160px]"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#how-it-works"
                    className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-black shadow-sm ring-1 ring-inset ring-black hover:bg-gray-50 sm:min-w-[160px]"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Hero Image */}
              <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                <div className="relative w-[90%] sm:w-[70%] lg:w-full max-w-[600px] transition-all duration-300 ">
                  <Image 
                    src={heroBanner} 
                    alt="Hero Image" 
                    className="object-contain w-full h-auto drop-shadow-xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}
 
export default Hero;