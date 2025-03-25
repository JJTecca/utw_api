import { PropsWithChildren } from 'react';

export default function WorldTourLayout({ children }: PropsWithChildren) {
    return (
        <div 
            className="flex min-h-screen flex-col bg-gray-100 pt-6 sm:pt-0 dark:bg-gray-900"
            style={{
                backgroundImage: 'url(/Images/tourbackground.jpg)',  
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
            }}
        >
            {children}
        </div>
    )
}