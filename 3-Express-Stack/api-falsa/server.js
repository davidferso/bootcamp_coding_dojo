const express = require("express");
const app = express();
const port = 8000;
const {faker} = require('@faker-js/faker');

const server = app.listen(port, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);


class Usuario {
    constructor() {
        this._idUsuario = faker.datatype.uuid(),
        this.primer_nombre = faker.name.firstName(),
        this.apellido = faker.name.lastName(),
        this.nro_telefono = faker.phone.number(),
        this.email = faker.internet.email(),
        this.password = faker.internet.password()
    }
}

class Empresa {
    constructor() {
        this.idEmpresa = faker.datatype.uuid(),
        this.nombre = faker.company.name(),
        this.direccion = [{calle: faker.address.street(), ciudad: faker.address.cityName(), 
            estado: faker.address.state(), codigo_postal: faker.address.zipCode(), pais: faker.address.country()}]
    }
}

app.get("/api/users/new", (req, res) => {
    res.send(new Usuario());
});

app.get("/api/companies/new", (req, res) => {
    res.send(new Empresa());
});

let usuario_empresa = Object.assign(new Usuario(), new Empresa())
app.get("/api/user/company", (req, res) => {
    res.json({usuario: new Usuario(), empresa: new Empresa()});
});