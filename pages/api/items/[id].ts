import { NextApiRequest, NextApiResponse } from 'next';

export default async function getItemDetail (req: NextApiRequest, res: NextApiResponse) {
    if (req.method !=='GET') {
        res.status(500).json({ message: 'Sorry we only accept GET requests'});
    }
    
    let detail: any;
    const url = 'https://api.mercadolibre.com/items/' + req.query.id;

    const apiResponse = await Promise.all([
            fetch(url),
            fetch(url + '/description')
        ]).then(function (responses) {
            return Promise.all(responses.map(function (response) {
                return response.json();
            }));
        }).then(function (data) {
            if (data[0].error || data[1].error) {
                res.status(500).json({ error: 'Resource not found'});
            } else {
                // Detail and Description OK
                detail = {
                    author: { 
                        name: '',
                        lastname: ''
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
                        description: data[1].plain_text
                    }
                };
                res.status(200).json({ 
                    detail
                });
            }
        }).catch(function (error) {
            res.status(500).json({ error });
    });
}
