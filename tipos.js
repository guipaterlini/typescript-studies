"use strict";
// Tipos sao sempre com letra minuscula
// Mais informações: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
// Boolean
var contaPaga = false;
// Number
var idade = 23;
var avaliacao = 4.5;
// String
var nome = "Guilherme";
// Array
var idades = [23, 28, 45];
var idades2 = [30, 39, 19]; //funciona exatamente igual a linha de cima, mas fazendo assim se acessa a interface do array
// Tuple - não é muito utilizado, as vezes é referenciado como tipo array, mas o nome correto é tuple
var jogadores;
jogadores = ["Guilherme", 10, true]; // se tentar acrescentar mais um nome ele nao deixar,
// foi definido que seriam 3 elementos dentro do array e os 3 seriam tem os seus tipos definidos
// Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
// Any - usar com muita cautela, somente em casos muito especiais
var retornoDaAPI = [123, "Guilherme", true];
var retornoDaAPI2 = {
// .....
};
// Void - muito pouco utilizado. No exemplo abaixo é do tipo void porque a função não retorna nada, se usar ctrl + mouse
// na função já aparecer o tipo
function printarNaTela(msg) {
    // esse :void poderia estar ou nao ali, nao faria diferença para o resultado final,
    //mesmo sem escrever o typescript consegue inferir que é tipo void, escrever ali seria somente para deixar registrado
    console.log(msg);
}
// Null e Undefined
var u = undefined;
var n = null;
// Object
function criar(objeto) {
    // ...
}
criar({
    propriedade: 1,
});
// criar('Guilherme') // Dá erro porque não é um object e sim uma string
// Never - quase nunca se vê nos projetos, mas as vezes o typescript irá inferir para uma funcção sem retorno, tipo um while infinito
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro("Algo falhou");
}
// Union Types - para quando uma função aceita mais um de tipo
var nota = 5;
function exibirNota(nota) {
    console.log("A nota \u00E9 ".concat(nota));
}
exibirNota("10");
exibirNota(10);
// type Funcionarios = Array<Funcionario>;
var funcionarios = [
    {
        nome: "Vitor",
        sobrenome: "Farias",
        dataNascimento: new Date(),
    },
    {
        nome: "Guilherme",
        sobrenome: "Paterlini",
        dataNascimento: new Date(),
    },
];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log("Nome do funcionario: ", funcionario.nome);
    }
}
var altura = 1.6;
altura = null;
var contato = {
    nome: "Diana",
    telefone1: "10232924030",
};
// Type Assertion
var minhaIdade = 23;
minhaIdade.toString();
var input = document.getElementById("numero1"); // Nesse exemplo foi utilizado para deixar claro para o typescript 
// que o elemento possui de fato uma propriedade tpo .value
// outra notação: const input = <HTMLInputElement>document.getElementById("numero1");
console.log(input.value);
