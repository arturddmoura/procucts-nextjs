import DeleteDialog from './modals/deleteDialog';
import ProductUpdateModal from './modals/updateModal';
import { currencyFormatter } from '@/helpers/helpers';
import { useStore } from '@/pages/store';
import { Delete, Edit } from '@mui/icons-material';
import { Box, Typography, Card, CardActions, CardContent, CardMedia, Button, IconButton, Stack } from '@mui/material/';
import { useState } from 'react';
import { productList } from 'types';

export default function CardComponent({ products }: { products: Array<productList> }) {
    const { showUpdate, showDelete, toggleShowUpdate, toggleShowDelete } = useStore();
    const [itemList, setItemList] = useState<productList>();
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                p: 1,
                m: 1,
            }}
        >
            {showDelete && itemList && <DeleteDialog item={itemList} />}
            {showUpdate && itemList && <ProductUpdateModal item={itemList} />}
            {products.map((item: productList) => {
                return (
                    <Card key={item.id} sx={{ m: 1, maxWidth: 245 }}>
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
                            <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="caption" component="div">
                                Added by: {item.addedBy}
                            </Typography>
                            <Typography sx={{ fontWeight: 'bold' }} variant="body2" component="div">
                                {currencyFormatter.format(Number(item.price))}
                            </Typography>
                        </CardContent>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                p: 1,
                                m: 1,
                            }}
                        >
                            <Box>
                                <Button
                                    size="small"
                                    component="a"
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    OPEN STORE LINK
                                </Button>
                            </Box>
                            <Box>
                                <IconButton
                                    onClick={() => {
                                        toggleShowUpdate();
                                        setItemList(item);
                                    }}
                                    size="small"
                                >
                                    <Edit fontSize="inherit" />
                                </IconButton>
                                <IconButton
                                    onClick={() => {
                                        toggleShowDelete();
                                        setItemList(item);
                                    }}
                                    size="small"
                                >
                                    <Delete fontSize="inherit" />
                                </IconButton>
                            </Box>
                        </Box>
                    </Card>
                );
            })}
        </Box>
    );
}
