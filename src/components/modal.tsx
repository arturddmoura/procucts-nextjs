import { Modal, Typography, Box, TextField, FormControl, Button } from '@mui/material/';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useStore } from '@/pages/store';
import { modalStyles } from '@/helpers/helpers';
import { productList } from 'types';
import { useMutation } from 'react-query';

export default function AddProductModal() {
    const mutation = useMutation({
        mutationFn: (formData: Object) => {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            };
            return fetch('/api/products/post', requestOptions);
        },
    });

    const { show, toggleShow } = useStore();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<productList>();
    const onSubmit: SubmitHandler<productList> = (data) => mutation.mutate(data);

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
                            fullWidth
                            id="standard-required"
                            label="Product"
                            variant="standard"
                            {...register('product', { required: true })}
                        />
                        {errors.product && <Typography variant="caption">This field is required</Typography>}
                        <TextField
                            fullWidth
                            id="standard-required"
                            label="Image"
                            variant="standard"
                            {...register('image', { required: true })}
                        />
                        {errors.image && <Typography variant="caption">This field is required</Typography>}
                        <TextField
                            fullWidth
                            id="standard-required"
                            label="Link"
                            variant="standard"
                            {...register('link', { required: true })}
                        />
                        {errors.link && <Typography variant="caption">This field is required</Typography>}
                        <TextField
                            fullWidth
                            id="standard-required"
                            label="Price"
                            type="number"
                            variant="standard"
                            {...register('price', { required: true })}
                        />
                        {errors.price && <Typography variant="caption">This field is required</Typography>}
                        <TextField
                            fullWidth
                            id="standard-required"
                            label="Added by"
                            variant="standard"
                            {...register('addedBy', { required: true })}
                        />
                        {errors.addedBy && <Typography variant="caption">This field is required</Typography>}
                    </Box>
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                        <Button variant="contained" type="submit">
                            Submit
                        </Button>
                    </Box>
                </form>
            </Box>
        </Modal>
    );
}
