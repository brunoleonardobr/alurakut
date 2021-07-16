const { SiteClient } = require('datocms-client');

export default async function recebedorDeRequests(request, response){

    if(request.method === 'POST'){
        const token = '9c967c6eb8dab4ec06e12201f86d55';
        const client = new SiteClient(token);

        const registroCriado = await client.items.create({
            itemType: '968537',
            ...request.body,
        })

        console.log(registroCriado)
        
        response.json({
            dados:'Algum dado qualquer',
            registroCriado: registroCriado
        })
        
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos no GET, mas no POST tem!'
    })
}