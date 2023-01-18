// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const id = req.query.id;

    const deletedProduct = await prisma.products.delete({
        where: {
            id: Number(id),
        },
    });

    res.json(deletedProduct);
}
