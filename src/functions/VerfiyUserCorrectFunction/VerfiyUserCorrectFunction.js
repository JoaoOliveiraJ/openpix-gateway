
const selectUserDB = require('../Mysql/Select/selectUserDB/selectUserDB')
const VerifyPaymentUserFunction = require('../VerifyPaymentUserFunction/VerifyPaymentUserFunction')


module.exports = async function VerfiyUserCorrectFunction (user, amount, req, res)
{

    let userFront = user

    let UserDB    = await selectUserDB(userFront, "slots")



    // console.log( UserDB[0].username)



    if (UserDB.length > 0 ) 
    {
        console.log('tem user cadastrado')

        let balanceNowUser = UserDB[0].balance

        await VerifyPaymentUserFunction(req, res, userFront, balanceNowUser)
    }
    else
    {
        console.log('nao tem user cadastrado')
    }
}