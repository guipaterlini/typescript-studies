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

class Carro {
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 220
  ) {}

  private alterarVelocidade(delta: number) {
    const novaVelocidade = this.velocidadeAtual + delta;

    if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }
  }

  acelerar() {
    this.alterarVelocidade(5);
  }

  frear() {
    this.alterarVelocidade(-5);
  }
}

const carro = new Carro("Chevrolet", "Onix", 160);
carro.acelerar();

// Herança
class Camaro extends Carro {
  private turbo = false; // nesse exemplo ao colocar o turbo como private a unica foma de modifica-lo é por dentro da propria classe usando o ligarTurbo

  // usando o extends eu herdo tudo da classe Carro
  constructor() {
    super("Chevrolet", "Camaro", 500);
  }

  ligarTurbo() {
    this.turbo = true;
  }
}

const camaro = new Camaro();
camaro.acelerar();
camaro.frear();
camaro.ligarTurbo();
