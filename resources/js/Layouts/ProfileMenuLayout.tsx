import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col bg-gray-100 pt-6 sm:pt-0 dark:bg-gray-900"
            style={{
                backgroundImage: 'url(/Images/a350.jpg)', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
            }}
        >
            {children}
        </div>
    );
}
