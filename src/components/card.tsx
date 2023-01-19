import * as React from 'react';
import { Box, Typography, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material/';
import { currencyFormatter } from '@/helpers/helpers';
import { productList } from 'types';

export default function CardComponent({ products }: any) {
    return (
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
            {products.map((item: productList) => {
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
                            <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="body2" component="div">
                                {currencyFormatter.format(Number(item.price))}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    OPEN STORE LINK
                                </a>
                            </Button>
                        </CardActions>
                    </Card>
                );
            })}
        </Box>
    );
}
