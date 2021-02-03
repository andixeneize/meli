import { NextApiRequest, NextApiResponse } from 'next';

export default async function getItems (req: NextApiRequest, res: NextApiResponse) {
    const limit = 4;
    const query = req.query;

    if (!query.q) {
        res.status(500).json({error: 'Bad Query'});
    } else {
        let url = 'https://api.mercadolibre.com/sites/MLA/search?q=' + query.q + '&limit=' + limit;
        url = url.replace(/ /g, '%20');
        
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            const result = {
                author: {
                    name: 'Andres',
                    lastname: 'Sanchez'
                },
                categories: data.available_filters[0].values,
                items: data.results,
            }
            res.status(200).json( result );
        } else {
            res.status(500).json({error: 'Something went wrong'});
        }
    }
}