const selectConviteExistingDB = require('../Mysql/Select/selectConviteExistingDB/selectConviteExistingDB')

module.exports = async function getCodeConvite(convite)
{

    let selectConviteExisting = await selectConviteExistingDB(convite)


    if (selectConviteExisting.length > 0) 
    {
        return 1    
    }
    else
    {
        return 0
    }

}