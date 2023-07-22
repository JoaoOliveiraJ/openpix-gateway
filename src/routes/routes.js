const express = require('express')

const Router = express.Router()


const paymentPixController   = require('../controllers/paymentPixController/paymentPixController')
const registerUserController = require('../controllers/RegisterUserController/registerUserController')
const loginUserController    = require('../controllers/LoginUserController/LoginUserController')

Router.post('/register', registerUserController.userRegister)

Router.post('/login', loginUserController.userLogin)

Router.post('/payment/v1/pix', paymentPixController.payment)

module.exports = Router