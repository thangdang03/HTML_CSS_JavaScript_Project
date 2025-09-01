'use client';
import Image from 'next/image';
import Link from 'next/link';
import { OrganizationSwitcher } from '@clerk/nextjs';
import logo from '@Public/logo.png';
import SearchCommand from './SearchCommand';

const NavDocument = () => { 
    
    return (
        <header className=" w-full ">
            <nav className="px-3 py-2 bg-white border-b h-[60px] flex items-center justify-between gap-4">
                {/* Logo and App Name */}
                <Link href="/documents" className="flex items-center gap-2 hover:opacity-75 transition">
                    <Image
                        src={logo}
                        alt="Logo"
                        height={30}
                        width={30}
                        className="dark:hidden"
                    />
                    <span className="font-semibold text-x hidden md:block">
                        CloudDocs
                    </span>
                </Link>

                {/* Search Bar */}
                <SearchCommand />

                {/* Organization List */}
                <OrganizationSwitcher 
                    hidePersonal={false}
                    afterCreateOrganizationUrl="/documents"
                    afterSelectOrganizationUrl="/documents"
                    appearance={{
                        elements: {
                            rootBox: "flex justify-center",
                            organizationSwitcherTrigger: "bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-2"
                        }
                    }}
                />
            </nav>
        </header>
    );
}

export default NavDocument;