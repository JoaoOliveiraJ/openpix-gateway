const app = require('../index')
require('dotenv').config()
// console.log(process)


let port = process.env.PORT

app.listen(port, () =>
{
    console.log('service on port: ', port)
})