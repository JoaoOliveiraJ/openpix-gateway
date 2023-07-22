const knex = require('../../../../db/knex')

module.exports = async function insertHistoryPayment(obj)
{

    try
    {

        return knex('history-payment').insert(obj)

    }
    catch(err)
    {
        console.log('erro ao registra usuario')
    }
    
} 