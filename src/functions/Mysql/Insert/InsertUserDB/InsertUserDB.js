const knex = require('../../../../db/knex')

module.exports = async function insertUserDB(obj)
{

    try
    {

        return knex('users').insert(obj)

    }
    catch(err)
    {
        console.log('erro ao registra usuario')
    }
    
} 