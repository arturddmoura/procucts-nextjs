import { Modal, Typography, Box, TextField, FormControl, Button } from '@mui/material/';
import { useStore } from '@/pages/store';
import { useForm, SubmitHandler } from 'react-hook-form';
import { productList } from 'types';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function AddProductModal() {
    const { show, toggleShow } = useStore();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<productList>();
    const onSubmit: SubmitHandler<productList> = (data) => console.log(data);

    return (
        <Modal
            open={show}
            onClose={toggleShow}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
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
