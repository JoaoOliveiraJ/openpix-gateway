const knex = require('../../../../db/knex')

module.exports = async function selectConviteExistingDB(invite)
{

    try
    {
        return knex('code_afiliate').select('*').where('code_user', invite)

    }
    catch(err)
    {
        console.log('erro ao encontra usuario. CODE: FUNCTION selectConviteExistingDB(invite), ARQUIVO: selectConviteExistingDB.JS, LINHA: 8')
    }
}