const alunos = [
    {
        nome: "Maria Clara",
        notas: [8, 7, 9],
        endereco: {
            rua: "Rua São Patrício",
            numero: 123
        }
    },
    {
        nome: "João Pedro",
        notas: [6, 5, 7],
        endereco: {
            rua: "Rua Ibirataia",
            numero: 456
        }
    },
    {
        nome: "Ana Clara",
        notas: [9, 8, 10],
        endereco: {
            rua: "Rua Cruz de malta",
            numero: 789
        }
    }
];

function calcularMedia(notas) {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
}


alunos.forEach(aluno => {
    const media = calcularMedia(aluno.notas);
    const status = media >= 7 ? "aprovado(a)" : "reprovado(a)";

    console.log(`Aluno(a) ${aluno.nome} com notas ${aluno.notas.join(", ")} mora na ${aluno.endereco.rua}, ${aluno.endereco.numero} e teve a média ${media}, portanto foi ${status}.`);
});
