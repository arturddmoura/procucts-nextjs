import { useStore } from './store';
import CardComponent from '@/components/card';
import Loading from '@/components/loading';
import ProductModal from '@/components/modal';
import NotFound from '@/components/pageNotFound';
import { Box, Button } from '@mui/material/';
import { useQuery } from 'react-query';
import NavBar from 'src/components/navBar';

export default function Home() {
    const { show, toggleShow } = useStore();
    const fetchProducts = async () => {
        const res = await fetch('/api/products');
        return res.json();
    };
    const { isLoading, isError, data, error } = useQuery('products', fetchProducts);

    return (
        <>
            <Box>
                <ProductModal />
                <NavBar />
                {isError ? <NotFound /> : null}
                {isLoading ? <Loading /> : null}
                <Button sx={{ m: 1 }} onClick={toggleShow} variant="contained">
                    Add product
                </Button>
                {data && <CardComponent products={data} />}
            </Box>
        </>
    );
}
