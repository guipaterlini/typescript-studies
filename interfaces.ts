// É mais comum o uso de interfaces do que criar types, é algo inclusive recomendado na documentação do TypeScript

interface Usuario {
  nome: string;
  email: string;
  address?: string;
}

function getUser(): Usuario {
  return {
    nome: "Guilherme",
    email: "guilherme@gmail.com",
  };
}

function setUser(usuario: Usuario) {
  // ...
}
