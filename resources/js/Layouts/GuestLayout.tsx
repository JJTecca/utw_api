import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col bg-gray-100 pt-6 sm:pt-0 dark:bg-gray-900"
            style={{
                backgroundImage: 'url(/Images/turkish-airlines-login.jpg)', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
            }}
        >
            <div className="mt-8 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg dark:bg-gray-800 ml-10">
                {children}
            </div>
        </div>
    );
}
