import { NextApiRequest, NextApiResponse } from 'next';

export default async function getItems (req: NextApiRequest, res: NextApiResponse) {
    const limit = 4;
    const query = req.query;

    if (!query.search) {
        //console.log('nope');
        res.status(200).json({ items: {} });
    } else {
        let url = 'https://api.mercadolibre.com/sites/MLA/search?q=' + query.search + '&limit=' + limit;
        url = url.replace(/ /g, '%20');
        
        //console.log(url);

        const apiResponse = await fetch(url);
        const items = await apiResponse.json();
        res.status(200).json({ items: items.results });
    }
}