var customers = [];

const listAllCustomers = (req, res) => {
    return res.send(customers)
}
const createCustomer = (req, res) => {
    var body = req.body;

    if (body.cpfTitular) res.status(405)
    if (body.dataNascimento) res.status(405)
    if (body.nome) res.status(405)
    if (body.cpf) res.status(405)

    var customer = {
        'cpfTitular': body.cpfTitular,
        'dataNascimento': body.dataNascimento,
        'nome': body.nome,
        'cpf': body.cpf,
    }
    customers.push(customer)
    res.json({}, 200);
}

const atualizaCustomer = (req, res) => {
    var body = req.body;
    let validar = false;
    for (let i = 0; i < customers.length; i++) {
        if (cpf == customers[i].cpf) {
            customers[i] = body;
            validar = true;
        }
    }
    if (!validar) res.json({ message: "Customer not found" }, 404)
    res.json({}, 200)
}

const listCustomerById = (req, res) => {
    var cpf = `${req.params.cpf}`;
    customers.forEach(elemento => {
        if (cpf == elemento.cpf) res.json(elemento);
    })
    res.json({ message: "Customer not found" }, 404)
}

const deleteCustomer = (req, res) => {
    var cpf = `${req.params.cpf}`;
    let validar = false;
    for (let i = 0; i < customers.length; i++) {
        if (cpf == customers[i].cpfTitular) {
            customers.splice(i, 1);
            validar = true;
        }
    }

    if (!validar) res.json({ message: "Customer not found" }, 404)
    else res.json({}, 200);
}

const listAllCustomerDependents = (req, res) => {
    var cpf = req.params.cpf;
    var resultado = [];

    customers.forEach(elemento => {
        if (cpf == elemento.cpfTitular) {
            resultado.push(elemento)
        }
    })
    if (resultado.length == 0) res.json({ message: "Customer não encontrado" }, 404)
    res.json(resultado);
}


module.exports = {
    createCustomer,
    listAllCustomers,
    atualizaCustomer,
    listCustomerById,
    deleteCustomer,
    listAllCustomerDependents
};