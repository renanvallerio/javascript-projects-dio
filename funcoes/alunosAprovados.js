const people = [
  {
    name: 'Tyrone',
    score: 8,
    class: '2B',
  },
  {
    name: 'Becky',
    score: 9,
    class: '1A',
  },
  {
    name: 'Stacy',
    score: 6,
    class: '2B',
  },
  {
    name: 'Chad',
    score: 4,
    class: '1A',
  }
];

function approvedStudents(students, average) {
  let approved = []

  for(let i = 0; i < students.length; i++) {

    const {score, name} = students[i];

    if (score >= average) {
      approved.push(name);
    }
  }
  return approved;
}

console.log(approvedStudents(people, 5))

// Correction
const alunos = [
  {
    nome: 'João',
    nota: 5,
    turma: '1B'
  },
  {
    nome: 'Sofia',
    nota: 9,
    turma: '1B'
  },
  {
    nome: 'Paulo',
    nota: 6,
    turma: '2C'
  },
  {
    nome: 'Miguel',
    nota: 3,
    turma: '2C'
  },
];

function alunosAprovados(arr, media){
  let aprovados = [];

  for(let i = 0; i < arr.length; i++){

    const {nota, nome} = arr[i];

    if(nota >= media) {
      aprovados.push(nome);
    }
  }

  return aprovados;
}

console.log(alunosAprovados(alunos, 5));