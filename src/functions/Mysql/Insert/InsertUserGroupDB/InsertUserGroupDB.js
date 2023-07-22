const knex = require('../../../../db/knex')

module.exports = async function insertUserDB(obj)
{

    try
    {

        return knex('group_user').insert(obj)

    }
    catch(err)
    {
        console.log('erro ao adiciona acesso premium ao usuario')
    }
    
} 