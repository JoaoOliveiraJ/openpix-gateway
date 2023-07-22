const insertUserDB = require('../../functions/Mysql/Insert/InsertUserDB/InsertUserDB')
const selectUserDB = require('../../functions/Mysql/Select/selectUserDB/selectUserDB')
const selectConviteExistingDB = require('../../functions/getCodeConvite/getcodeConvite')
const bcrypt = require("bcrypt")

exports.userLogin = async function (req, res) 
{

    let dataUserFront = req.body

    let emailFront        = dataUserFront.email

    // let userNameFront     = dataUserFront.username

    let userPasswordFront = dataUserFront.senha

    let userDBFunction = await selectUserDB(emailFront)

   

    console.log(userDBFunction)

    if (userDBFunction.length > 0) 
    {
        let decryptPassWord = await bcrypt.compare(userPasswordFront, userDBFunction[0].password)
       
        console.log('pass cript', decryptPassWord)
        if (decryptPassWord) {
        res.json({code: 1, token: emailFront, afiliate: userDBFunction[0].is_afiliate, data_renew: userDBFunction[0].date_renew})
            
        }
        else
        {
            res.json({code: 0, message: 'senha incorreta'})
        }

    }
    else
    {

        console.log('erro busca nos dados')

        res.json({message: 'Email incorreto', code: 0})
        // const saltRounds = 10
        // const password = userPasswordFront
        // let passEncrypt = await bcrypt.hash(password, saltRounds)


        // console.log(passEncrypt)


        // let objRegisterUser = 
        // {
        //     username: userNameFront,
        //     email: emailFront,
        //     is_email_confirmed: 1,
        //     password: passEncrypt,
        //     code_afiliate_used: inviteUserCode
        // }

        // await insertUserDB(objRegisterUser)

        // res.json({message: 1})

    }



}