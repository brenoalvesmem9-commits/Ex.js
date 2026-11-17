"use strict";

class Aluno {
    constructor(p1, p2, name, ra) {
        this.med = (p1 + p2) / 2;
        this.name = name;
        this.ra = ra;
    }

    dados() {
        console.log(`${this.name} - ${this.ra} - ${this.med}`);
    }
}

let Breno = new Aluno(8, 7, "Breno", 911);
Breno.dados();

function verificarAprovacao(med) {
    if (med >= 7) {
        return "Aprovado";
    }else {
        return "Reprovado";
    }
}

console.log(verificarAprovacao(Breno.med));

let Vinicius = new Aluno(3,5, "Vinicius", 732);
Vinicius.dados();

console.log(verificarAprovacao(Vinicius.med));
