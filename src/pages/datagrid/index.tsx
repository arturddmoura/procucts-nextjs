import Loading from '@/components/loading/loading';
import ProductModal from '@/components/modals/modal';
import NotFound from '@/components/pageNotFound';
import { Box, Button } from '@mui/material/';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useQuery } from 'react-query';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', maxWidth: 90 },
    {
        field: 'product',
        headerName: 'Product',
        flex: 1,
    },
    {
        field: 'price',
        headerName: 'Price',
        flex: 1,
    },
    {
        field: 'addedBy',
        headerName: 'Added by',
        flex: 1,
    },
];

export default function DataGridExample() {
    const fetchProducts = async () => {
        const res = await fetch('/api/products');
        return res.json();
    };
    const { isLoading, isError, data } = useQuery('products', fetchProducts);

    return (
        <>
            <Box>
                <ProductModal />
                {isError ? <NotFound /> : null}
                {isLoading ? <Loading /> : null}
                {data && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', m: 5, height: 400 }}>
                        <DataGrid
                            rows={data}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            disableSelectionOnClick
                        />
                    </Box>
                )}
            </Box>
        </>
    );
}
