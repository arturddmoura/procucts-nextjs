import { useStore } from '@/pages/store';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material/';
import { useMutation, useQueryClient } from 'react-query';
import { productList } from 'types';

export default function DeleteDialog({ item }: { item: productList }) {
    const { showDelete, toggleShowDelete } = useStore();
    const queryClient = useQueryClient();

    const { mutate, isLoading, isSuccess, isError } = useMutation({
        mutationFn: (formData: productList) => {
            const requestOptions = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            };
            return fetch(`/api/products/delete/${item.id}`, requestOptions);
        },
        onSuccess: async () => {
            queryClient.invalidateQueries('products');
            toggleShowDelete();
        },
    });

    return (
        <>
            <Dialog open={showDelete} onClose={toggleShowDelete}>
                <DialogTitle>Delete product</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete {item.product}? This will permanently delete the item.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="secondary" onClick={toggleShowDelete}>
                        Cancel
                    </Button>
                    <Button variant="contained" color="error" onClick={() => mutate(item)} autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
