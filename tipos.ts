// Tipos sao sempre com letra minuscula
// Mais informações: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 23;
const avaliacao: number = 4.5;

// String
const nome: string = "Guilherme";

// Array
const idades: number[] = [23, 28, 45];
const idades2: Array<number> = [30, 39, 19]; //funciona exatamente igual a linha de cima, mas fazendo assim se acessa a interface do array

// Tuple - não é muito utilizado, as vezes é referenciado como tipo array, mas o nome correto é tuple
let jogadores: [string, number, boolean];
jogadores = ["Guilherme", 10, true]; // se tentar acrescentar mais um nome ele nao deixar,
// foi definido que seriam 3 elementos dentro do array e os 3 seriam tem os seus tipos definidos

// Enum
enum StatusAprovacao {
  Aprovado = "001",
  Pendente = "002",
  Rejeitado = "003",
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any - usar com muita cautela, somente em casos muito especiais
const retornoDaAPI: any[] = [123, "Guilherme", true];
const retornoDaAPI2: any = {
  // .....
};

// Void - muito pouco utilizado. No exemplo abaixo é do tipo void porque a função não retorna nada, se usar ctrl + mouse
// na função já aparecer o tipo
function printarNaTela(msg: string): void {
  // esse :void poderia estar ou nao ali, nao faria diferença para o resultado final,
  //mesmo sem escrever o typescript consegue inferir que é tipo void, escrever ali seria somente para deixar registrado
  console.log(msg);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar(objeto: object) {
  // ...
}

criar({
  propriedade: 1,
});
// criar('Guilherme') // Dá erro porque não é um object e sim uma string

// Never - quase nunca se vê nos projetos, mas as vezes o typescript irá inferir para uma funcção sem retorno, tipo um while infinito
function loopInfinito(): never {
  while (true) {}
}

function erro(mensagem: string): never {
  throw new Error(mensagem);
}

function falha() {
  return erro("Algo falhou");
}

// Union Types - para quando uma função aceita mais um de tipo
const nota: string | number = 5;
function exibirNota(nota: number | string) {
  console.log(`A nota é ${nota}`);
}

exibirNota("10");
exibirNota(10);

// Alias - voce cria um tipo de typescript, no exemplo foi criado o tipo funcionario
type Funcionario = {
  nome: string;
  sobrenome: string;
  dataNascimento: Date;
};

// type Funcionarios = Array<Funcionario>;
const funcionarios: Funcionario[] = [
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

function tratarFuncionarios(funcionarios: Funcionario[]) {
  for (let funcionario of funcionarios) {
    console.log("Nome do funcionario: ", funcionario.nome);
  }
}
