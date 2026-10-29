import { Footer } from '@/app/(root)/layout/footer';
import { Navbar } from '@/app/(root)/layout/navbar';

import React from 'react';

const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default layout;