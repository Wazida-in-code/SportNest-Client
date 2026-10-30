import { Footer } from '@/app/(root)/layout/footer';
import { Navbar } from '@/app/(root)/layout/navbar';

import React from 'react';
import { Suspense } from 'react';

const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <Suspense fallback={<div className="h-16" aria-hidden="true" />}>
                <Navbar />
            </Suspense>
            {children}
            <Footer />
        </div>
    );
};

export default layout;