import { NextApiRequest, NextApiResponse } from 'next';

export default async function getItemDetail (req: NextApiRequest, res: NextApiResponse) {
    if (req.method !=='GET') {
        return res.status(405).end();
    }
    
    let detail: any;
    const url = 'https://api.mercadolibre.com/items/' + req.query.id;

    return Promise.all([
            fetch(url),
            fetch(url + '/description')
        ]).then(function (responses) {
            return Promise.all(responses.map(function (response) {
                return response.json();
            }));
        }).then(function (data) {
            // Are Detail and Description OK?
            if (data[0].error || data[1].error) {
                return res.status(500).json({ error: 'Resource not found'});
            } else {
                // Fecth category path for Breadcrumbs
                const categoryUrl = 'https://api.mercadolibre.com/categories/'+ data[0].category_id;

                return fetch(categoryUrl).then((response) => {
                    return response.json();
                }).then((catgories) => {            
                    detail = {
                        author: { 
                            name: 'Andres',
                            lastname: 'Sanchez'
                        },
                        item: {
                            id: data[0].id,
                            title: data[0].title,
                            price: {
                                currency: data[0].currency_id,
                                amount: Math.trunc(data[0].price),
                                decimals: (data[0].price) %1,
                            },
                            picture: data[0].pictures[0].url,
                            condition: data[0].condition,
                            free_shipping: data[0].free_shipping,
                            sold_quantity: data[0].sold_quantity,
                            description: data[1].plain_text,
                            categories: catgories.path_from_root
                        }
                    };
                    return res.status(200).json(detail);
                })
            }
        }).catch(function (error) {
            return res.status(500).json({ error: 'Something went wrong' });
    });
}
