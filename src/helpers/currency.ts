export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

export const currencyConfig = {
    locale: 'pt-BR',
    formats: {
        number: {
            BRL: {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            },
        },
    },
};
