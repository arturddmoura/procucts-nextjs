import { modalStyles } from '@/helpers/helpers';
import { useStore } from '@/pages/store';
import LoadingButton from '@mui/lab/LoadingButton';
import { Modal, Typography, Box, TextField, Button } from '@mui/material/';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { productList } from 'types';

export default function ProductModal() {
    const queryClient = useQueryClient();

    const { mutate, isLoading, isSuccess, isError } = useMutation({
        mutationFn: (formData: productList) => {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            };
            return fetch('/api/products/post', requestOptions);
        },
        onSuccess: async () => {
            queryClient.invalidateQueries('products');
            toggleShow();
            toggleSnackbar();
        },
        onError: async () => toggleSnackbarError(),
    });

    const { show, toggleShow, toggleSnackbar, toggleSnackbarError } = useStore();
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<productList>();
    const onSubmit: SubmitHandler<productList> = (data) => mutate(data);

    return (
        <Modal
            open={show}
            onClose={toggleShow}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalStyles}>
                <Typography textAlign="center" variant="h5">
                    Add product
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box>
                        <TextField
                            sx={{ mt: 3, mb: 1 }}
                            fullWidth
                            id="standard-required"
                            label="Product"
                            variant="outlined"
                            {...register('product', { required: true })}
                        />
                        {errors.product && <Typography variant="caption">This field is required</Typography>}
                        <TextField
                            sx={{ mb: 1 }}
                            fullWidth
                            id="standard-required"
                            label="Image"
                            variant="outlined"
                            {...register('image', { required: true })}
                        />
                        {errors.image && <Typography variant="caption">This field is required</Typography>}
                        <TextField
                            sx={{ mb: 1 }}
                            fullWidth
                            id="standard-required"
                            label="Link"
                            variant="outlined"
                            {...register('link', { required: true })}
                        />
                        {errors.link && <Typography variant="caption">This field is required</Typography>}
                        <TextField
                            sx={{ mb: 1 }}
                            fullWidth
                            id="standard-required"
                            label="Price"
                            type="number"
                            variant="outlined"
                            inputProps={{
                                step: 'any',
                            }}
                            {...register('price', { required: true })}
                        />
                        {errors.price && <Typography variant="caption">This field is required</Typography>}
                        <TextField
                            sx={{ mb: 3 }}
                            fullWidth
                            id="standard-required"
                            label="Added by"
                            variant="outlined"
                            {...register('addedBy', { required: true })}
                        />
                        {errors.addedBy && <Typography variant="caption">This field is required</Typography>}
                    </Box>
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                        <Button color="secondary" variant="contained" onClick={() => reset()}>
                            RESET
                        </Button>
                        <LoadingButton loading={isLoading} variant="contained" type="submit">
                            Submit
                        </LoadingButton>
                    </Box>
                </form>
            </Box>
        </Modal>
    );
}
