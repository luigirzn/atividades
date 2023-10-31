
const funcionarios = [
  { nome: 'Wally', salario: 4800 },
  { nome: 'João', salario: 2500 },
  { nome: 'Maria', salario: 3500 },
  { nome: 'Pedro', salario: 4200 },
  { nome: 'Ana', salario: 6000 }
];


console.log('Lista de Funcionários antes do reajuste:');
funcionarios.forEach(funcionario => {
  console.log(`${funcionario.nome}: R$ ${funcionario.salario.toFixed(2)}`);
});


const funcionariosReajustados = funcionarios.map(funcionario => ({
  nome: funcionario.nome,
  salario: funcionario.salario * 1.05
}));

const funcionariosAcimaDe5000 = funcionariosReajustados.filter(funcionario => funcionario.salario > 5000);


console.log('\nLista de Funcionários após o reajuste:');
funcionariosReajustados.forEach(funcionario => {
  console.log(`${funcionario.nome}: R$ ${funcionario.salario.toFixed(2)}`);
});


const wally = funcionariosReajustados.find(funcionario => funcionario.nome === 'Wally');

console.log('\nVocê encontrou o Wally?');
if (wally) {
  console.log(`Sim, o ${wally.nome} foi encontrado!`);
} else {
  console.log('Não, o Wally não foi encontrado.');
}
