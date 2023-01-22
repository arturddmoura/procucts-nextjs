import { useStore } from '../store';
import Loading from '@/components/loading/loading';
import DeleteDialog from '@/components/modals/deleteDialog';
import ProductModal from '@/components/modals/modal';
import ProductUpdateModal from '@/components/modals/updateModal';
import NotFound from '@/components/pageNotFound';
import { currencyFormatter } from '@/helpers/helpers';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button } from '@mui/material/';
import {
    DataGrid,
    GridActionsCellItem,
    GridEnrichedColDef,
    GridRowParams,
    GridValueGetterParams,
} from '@mui/x-data-grid';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { productList } from 'types';

export default function DataGridExample() {
    const columns: GridEnrichedColDef[] = [
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
            valueGetter: (params: GridValueGetterParams) => {
                return `${currencyFormatter.format(Number(params.value))}`;
            },
        },
        {
            field: 'addedBy',
            headerName: 'Added by',
            flex: 1,
        },
        {
            field: 'dateAdded',
            headerName: 'Date added',
            flex: 1,
            valueFormatter: (params) => new Date(params?.value).toLocaleString(),
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: (params: GridRowParams) => [
                <GridActionsCellItem
                    icon={<EditIcon />}
                    label="Edit"
                    onClick={() => {
                        setItemList(params.row);
                        toggleShowUpdate();
                    }}
                />,
                <GridActionsCellItem
                    icon={<DeleteIcon />}
                    label="Delete"
                    onClick={() => {
                        setItemList(params.row);
                        toggleShowDelete();
                    }}
                />,
            ],
        },
    ];

    const fetchProducts = async () => {
        const res = await fetch('/api/products');
        return res.json();
    };
    const { isLoading, isError, data } = useQuery('products', fetchProducts);
    const { showUpdate, showDelete, toggleShowUpdate, toggleShowDelete, toggleShow } = useStore();
    const [itemList, setItemList] = useState<productList>();

    return (
        <>
            <Box>
                <ProductModal />
                {isError ? <NotFound /> : null}
                {isLoading ? <Loading /> : null}
                {showDelete && itemList && <DeleteDialog item={itemList} />}
                {showUpdate && itemList && <ProductUpdateModal item={itemList} />}
                <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
                    <Button sx={{ m: 1 }} onClick={toggleShow} variant="contained">
                        Add product
                    </Button>
                </Box>
                {data && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', mx: 5, my: 2, height: 400 }}>
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
