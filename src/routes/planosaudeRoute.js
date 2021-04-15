const express = require('express');
const controller = require('../controller/planosaude.controller');

const router = express.Router();

router.get('/customers/:cpf/dependents', controller.listAllCustomerDependents);
router.delete('/customers/:cpf', controller.listAllCustomers);
router.get('/customers/:cpf', controller.listCustomerById);
router.patch('/customers/:cpf', controller.atualizaCustomer);
router.get('/customers', controller.listAllCustomers);
router.post('/customers', controller.createCustomer);



module.exports = router;