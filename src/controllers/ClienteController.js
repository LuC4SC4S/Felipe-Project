const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {
    async index(req, res){
        const clients = await connection('clients').select('*');

        return res.json(clients);
    },

    async cadastro(req, res){
        const id = generateUniqueId();
        const name = req.body.name;
        const product = req.body.product;
        const observation = req.body.observation;
        const longitude = req.body.longitude;
        const latitude = req.body.latitude;
        const city = req.body.city;

        await connection('clients').insert({
            id,
            name,
            product,
            observation,
            longitude,
            latitude,
            city
        });

        return res.json({
            message: `Cliente ${name}: Cadastrado com sucesso`
        });
    }
}