import NavBar from '@/components/navbar/navBar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function App({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient());
    return (
        // Provide the client to your App
        <QueryClientProvider client={queryClient}>
            <NavBar />
            <Component {...pageProps} />
        </QueryClientProvider>
    );
}
