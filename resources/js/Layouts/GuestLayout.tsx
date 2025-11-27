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
            {/*****************************
             * Login Box Adjust Content 
             * Margin Top : 8 
             * Width : full
             ****************************/}
            <div className="mt-8 w-full overflow-hidden bg-white sm:max-w-sm  ml-10"
                 style={{ transform: 'scale(0.75)', transformOrigin: 'top left' }}>
                {children}
            </div>
        </div>
    );
}