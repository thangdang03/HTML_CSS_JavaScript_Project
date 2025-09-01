'use client'
import Link from "next/link";
import { AlertCircle } from "lucide-react";

const Permission = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center flex-col gap-4">
            <div className="flex items-center gap-2 text-red-500">
                <AlertCircle className="h-8 w-8" />
                <h1 className="text-2xl font-bold">Access Denied</h1>
            </div>
            <p className="text-muted-foreground">
                You don&apos;t have permission to access this document.
            </p>
            <Link 
                href="/documents" 
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
                Back to Documents
            </Link>
        </div>
    );
};

export default Permission;