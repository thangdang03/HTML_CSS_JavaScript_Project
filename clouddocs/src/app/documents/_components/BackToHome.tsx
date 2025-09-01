import { Home } from "lucide-react";
import Link from "next/link";

const BackToHome = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 flex items-center justify-center p-4">
            <div className="max-w-md w-full text-center">
                <div className="mb-8 animate-bounce">
                    <Home className="w-16 h-16 mx-auto text-blue-600" />
                </div>
                <h1 className="text-2xl font-bold mb-4 text-gray-900">
                    Please Sign In
                </h1>
                <p className="text-gray-600 mb-8">
                    You need to be signed in to access this page
                </p>
                <Link 
                    href="/"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-all duration-300"
                >
                    <Home className="w-5 h-5" />
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
 
export default BackToHome;