import { PropsWithChildren } from 'react';

export default function AuthenticatedLayout({ children }: PropsWithChildren) {
    return (
        <div>
            {children}
        </div>
    );
}
