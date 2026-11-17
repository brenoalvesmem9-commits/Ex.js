"use strict";

class Carro {

    constructor(marca, ano, tipo) {
        this.marca = marca;
        this.ano = ano;
        this.tipo = tipo;
    }

    apresentar() {
        console.log(`${this.marca} - ${this.ano} - ${this.tipo}`);
    }
}

let meuCarro = new Carro("Honda City", 2027, "Sedan");

meuCarro.apresentar();