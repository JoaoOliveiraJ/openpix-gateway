const selectUserDB = require('../Mysql/Select/selectUserDB/selectUserDB')
require('dotenv').config()

let authTokenOpenPix = process.env.API_KEY_OPENPIX

module.exports = async function VerifyPaymentUserFunction (req, res, user, amount) 
{


    
    let reciveDataPaymentPix = req.body

    let UserFront = user

    let UserPaymentValue = amount
    // console.log('CORRELATION ID : ', reciveDataPaymentPix.correlationID)
    
    console.log('token ', UserPaymentValue)
    // console.log('AAAA STATUS ', reciveDataPaymentPix.dataCompleted.status)
    // console.log(reciveDataPaymentPix.dataCompleted.status === "COMPLETED")

    try
    {
        if(reciveDataPaymentPix.dataCompleted.status === "COMPLETED")
        {
            const axios = require('axios');
    
            // console.log('deru certo buceta')
            // let getTransactionData = await getTransaction()
    
            // console.log(getTransactionData)
    
            const config = {
                method: 'get',
                url: 'https://api.openpix.com.br/api/v1/transaction',
                headers: {    "Authorization": `${authTokenOpenPix}`
            }
            }
        
            let resultPayment = await axios(config)
        
        
        // let resultPayment = 
            for (let index = 0; index < resultPayment.data.transactions.length; index++) {
                const element = resultPayment.data.transactions[index];
        
         
                if (element.type === 'PAYMENT')
                {
                   console.log();
                   let tes = element.charge?.correlationID ?? 'null'
                   if (tes != "null") 
                   {
                    //    console.log(tes === reciveDataPaymentPix.correlationID)   
                       
                       let verifyCompletedPayment = tes === reciveDataPaymentPix.correlationID
    
                       if(verifyCompletedPayment)
                       {
    
    
    
                            console.log('pagamento concluido ativando mensalidade')
                            res.json({'suceeso': 'succeso'})
    
                       }
                   }
                   
               }
                
     
                
            }
            
        }
    
    }
    catch(err)
    {
        console.log('erro pagamento')
        res.send('vai se fuder')
    }

   


}