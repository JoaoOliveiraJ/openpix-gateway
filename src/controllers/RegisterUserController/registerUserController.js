const insertUserDB = require('../../functions/Mysql/Insert/InsertUserDB/InsertUserDB')
const selectUserDB = require('../../functions/Mysql/Select/selectUserDB/selectUserDB')
const selectConviteExistingDB = require('../../functions/getCodeConvite/getcodeConvite')
const bcrypt = require("bcrypt")

exports.userRegister = async function (req, res) 
{

    let dataUserFront = req.body

    let emailFront        = dataUserFront.email

    let userNameFront     = dataUserFront.username

    let userPasswordFront = dataUserFront.password

    let inviteUserCode    = dataUserFront.invite

    let userDBFunction = await selectUserDB(emailFront)

    let existingInviteCode = await selectConviteExistingDB(inviteUserCode)

    console.log(userDBFunction.length > 0 && existingInviteCode === 0)

    if (userDBFunction.length > 0 || existingInviteCode === 0) 
    {
        
        res.json({message: 0})

    }
    else
    {
        const saltRounds = 10
        const password = userPasswordFront
        let passEncrypt = await bcrypt.hash(password, saltRounds)


        console.log(passEncrypt)

        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        let objRegisterUser = 
        {
            username: userNameFront + getRandomIntInclusive(10000, 20000),
            email: emailFront,
            is_email_confirmed: 1,
            password: passEncrypt,
            code_afiliate_used: inviteUserCode
        }

        await insertUserDB(objRegisterUser)

        res.json({message: 1})

    }



}