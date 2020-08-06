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
        const cel = req.body.cel;
        const stars = req.body.stars;
        const product = req.body.product;
        const observation = req.body.observation;
        const longitude = req.body.longitude;
        const latitude = req.body.latitude;
        const city = req.body.city;

        await connection('clients').insert({
            id,
            name,
            cel,
            stars,
            product,
            observation,
            longitude,
            latitude,
            city
        });

        return res.json({
            message: `Cliente ${name} com id ${id}: Cadastrado com sucesso`
        });
    },

    async delete(req, res){
        const { id } = req.params;

        try {
            await connection('clients').where('id', id).delete();    
        } catch (error) {
            return res.json({ message: `Erro ao excluir!`})    
        }

        return res.json({ message: `Cliente com id ${id} excluido com sucesso!`})
    }
}