import { useStore } from './store';
import NavBar from '@/components/navbar/navBar';
import SnackBar from '@/components/snackbars/snackBar';
import SnackBarError from '@/components/snackbars/snackBarError';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function App({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient());
    const { snackbar, snackbarError } = useStore();

    return (
        // Provide the client to your App
        <QueryClientProvider client={queryClient}>
            {snackbarError && <SnackBarError />}
            {snackbar && <SnackBar />}
            <NavBar />
            <Component {...pageProps} />
        </QueryClientProvider>
    );
}
