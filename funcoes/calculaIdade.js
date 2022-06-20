function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
  nome: "Stacy",
  idade: 19
}

const pessoa2 = {
  nome: "Becky",
  idade: 23
}

const animal = {
  nome: 'Scooby',
  idade: 7,
  raca: 'Dogue'
};

console.log(calculaIdade.apply(pessoa1, [4]));