'use client';

import { useEffect } from 'react';
import Aos from 'aos';

export default function AOSProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        Aos.init({
            duration: 800,
            once: false,
        });
    }, []);

    return <>{children}</>;
}
