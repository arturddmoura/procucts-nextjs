// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const id = req.query.id;

    const updatedProduct = await prisma.products.update({
        where: {
            id: Number(id),
        },
        data: req.body,
    });

    res.json(updatedProduct);
}
