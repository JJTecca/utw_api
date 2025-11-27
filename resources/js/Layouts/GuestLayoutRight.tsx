import { PropsWithChildren } from 'react';

export default function GuestRightLayout({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col bg-gray-100 pt-6 sm:relative sm:pt-0 dark:bg-gray-900"
            style={{
                backgroundImage: 'url(/Images/turkish-airlines-register.jpg)', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
            }}    
        >
            <div className="flex justify-end w-full"> {/* Align content to the right */}
                {/*****************************
                     * Login Box Adjust Content 
                     * Margin Top : 8 
                     * Width : full
                     * Add right margin : 10
                ****************************/}
                <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg dark:bg-gray-800 mr-10 " 
                     style={{ transform: 'scale(0.65)', transformOrigin: 'top right' }}>
                            {children}
                </div>
            </div>
        </div>
    );
}