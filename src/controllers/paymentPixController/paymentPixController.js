
const VerifyPaymentUserFunction = require('../../functions/VerifyPaymentUserFunction/VerifyPaymentUserFunction')

exports.payment = async (req, res) =>
{

    let ammount = req.body.ammount

    await VerifyPaymentUserFunction(req, res, user, ammount)

}