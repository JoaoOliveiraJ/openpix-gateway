const knex = require('../../../../db/knex')

module.exports = async function selectUserDB(email)
{

    try
    {
        return knex('users').select('*').where('email', email)

    }
    catch(err)
    {
        console.log('erro ao encontra usuario. CODE: FUNCTION SELECTUSERDB(EMAIL), ARQUIVO: SELECTUSERDB.JS, LINHA: 8')
    }
}