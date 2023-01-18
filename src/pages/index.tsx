import NavBar from 'src/components/navBar';
import { useQuery } from 'react-query';
import { Box, Typography, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material/';
import internal from 'stream';

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

type productList = {
    id: number;
    product: string;
    image: string;
    link: string;
    price: number;
    dateAdded: Date;
    addedBy: string;
};

export default function Home() {
    const fetchProducts = async () => {
        const res = await fetch('/api/products');
        return res.json();
    };

    const { isLoading, isError, data, error } = useQuery('products', fetchProducts);

    return (
        <>
            <NavBar />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    flexWrap: 'wrap',
                    p: 1,
                    m: 1,
                }}
            >
                {data &&
                    data.map((item: productList) => {
                        return (
                            <Card key={item.id} sx={{ m: 2, maxWidth: 245 }}>
                                <CardMedia
                                    sx={{ mt: 2, objectFit: 'contain' }}
                                    component="img"
                                    height="200"
                                    image={item.image}
                                    alt="product picture"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="body1" component="div">
                                        {item.product}
                                    </Typography>
                                    <Typography
                                        sx={{ fontWeight: 'bold' }}
                                        gutterBottom
                                        variant="body2"
                                        component="div"
                                    >
                                        {currencyFormatter.format(Number(item.price))}
                                        <Typography> {item.dateAdded.toString()}</Typography>
                                        {item.addedBy}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">
                                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                                            IR ATÉ A LOJA
                                        </a>
                                    </Button>
                                </CardActions>
                            </Card>
                        );
                    })}
            </Box>
        </>
    );
}
