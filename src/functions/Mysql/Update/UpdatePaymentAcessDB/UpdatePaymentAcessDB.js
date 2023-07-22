const knex = require('../../../../db/knex')

module.exports = async function UpdatePaymentAcess(obj, email) 
{
    try
    {
        return knex('users').update(obj).where('email', email)
    }
    catch(err)
    {
        console.log('Erro ao fazer update de mensalidade')
    }
}