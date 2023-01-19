export type productList = {
    id: number;
    product: string;
    image: string;
    link: string;
    price: number;
    dateAdded: Date;
    addedBy: string;
};

export type addProduct = {
    product: string;
    image: string;
    link: string;
    price: number;
};
