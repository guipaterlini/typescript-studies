class Data {
  public dia: number;
  mes: number;
  ano: number;

  constructor(dia: number, mes: number, ano: number = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

// Um alternativa ao codigo acima seria colocar direto no contructor o public, atingindo o mesmo objetivo em menos linhas, ficando assim:

// class Data {
//   constructor(
//     public dia: number,
//     public mes: number,
//     publicano: number = 1970
//   ) {}
// }

const data = new Data(1, 1, 2020);
console.log(data.dia);

const data2 = new Data(1, 1); // Ele aceita somente dois parametros porque está pegando o valor default 1970 colocado no constructor
