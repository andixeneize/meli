import { NextApiRequest, NextApiResponse } from 'next';

export default async function getItems (req: NextApiRequest, res: NextApiResponse) {
    const limit = 4;
    const query = req.query;

    if ( req.method !== "GET"){
        return res.status(405).end();
    }

    if (!query.q) {
        return res.status(500).json({error: 'Bad Query'});
    } 
    
    let url = 'https://api.mercadolibre.com/sites/MLA/search?q=' + query.q + '&limit=' + limit;
    url = url.replace(/ /g, '%20');
    
    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        let category = null;

        if (data.filters[0]) {
            category = data.filters[0].values[0].path_from_root;
        }

        const result = {
            author: {
                name: 'Andres',
                lastname: 'Sanchez'
            },
            categories: category,
            items: data.results,
        }
        return res.status(200).json( result );
    } else {
        return res.status(500).json({error: 'Something went wrong'});
    }

}