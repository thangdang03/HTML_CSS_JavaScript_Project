'use client';

import { AlertCircle, RefreshCcw } from 'lucide-react';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error = ({ error, reset }: ErrorPageProps) => {
  return (
    <html>
        <head>
            <title>Error</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/icon.png" />
        </head>
        <body>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-red-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Error Icon */}
        <div className="mb-8 animate-bounce-slow">
          <AlertCircle className="w-20 h-20 mx-auto text-red-500" />
        </div>

        {/* Error Content */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
          Oops! Something went wrong
        </h1>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-8 animate-fade-in-up shadow-lg">
          <p className="text-gray-600 text-lg mb-4">
            We apologize for the inconvenience. An error has occurred:
          </p>
          <p className="text-red-600 font-mono bg-red-50 p-4 rounded-lg overflow-auto">
            {error.message || "An unexpected error occurred"}
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={reset}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:opacity-90 transition-all duration-300 hover:-translate-y-0.5 animate-fade-in-up"
        >
          <RefreshCcw className="w-5 h-5" />
          Try Again
        </button>
      </div>
            </div>
        </body>
    </html>
  );
};

export default Error;