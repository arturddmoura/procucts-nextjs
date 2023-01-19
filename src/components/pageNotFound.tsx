import error from '@/images/error.png';
import { Box, Typography } from '@mui/material/';

export default function NotFound() {
    console.log(error);
    return (
        <>
            <Box display="flex" justifyContent="center" alignItems="center">
                <img style={{ height: '40%', width: '40%' }} src={error.src} />
            </Box>
            <Typography textAlign={'center'}>
                <a href="http://www.freepik.com">Designed by pikisuperstar / Freepik</a>
            </Typography>
        </>
    );
}
