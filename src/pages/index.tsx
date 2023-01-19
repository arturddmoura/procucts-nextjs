import { useState } from 'react';

import NavBar from 'src/components/navBar';
import CardComponent from '@/components/card';
import { useQuery } from 'react-query';
import { Box, Button, Modal, Typography } from '@mui/material/';

import { useStore } from './store';
import AddProductModal from '@/components/modal';

export default function Home() {
    const { show, toggleShow } = useStore();
    const fetchProducts = async () => {
        const res = await fetch('/api/products');
        return res.json();
    };
    const { isLoading, isError, data, error } = useQuery('products', fetchProducts);

    return (
        <>
            <NavBar />
            <Button onClick={toggleShow} variant="contained">
                teste
            </Button>
            <AddProductModal />
            <Box>{data && <CardComponent products={data} />}</Box>
        </>
    );
}
