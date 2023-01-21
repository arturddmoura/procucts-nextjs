// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from 'lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const productsList = await prisma.products.findMany();
    res.json(productsList);
}
