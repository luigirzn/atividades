var codigoPromocional = prompt("Informe o código promocional (DESC1, DESC2, DESC3, DESC4 ou DESC5):");

var valorOriginal = 1000; 

switch (codigoPromocional) {
    case "DESC1":
        var desconto = 0.05;
        console.log("05% de desconto");
        break;
    case "DESC2":
        var desconto = 0.10;
        console.log("10% de desconto");
        break;
    case "DESC3":
        var desconto = 0.15;
        console.log("15% de desconto");
        break;
    case "DESC4":
        var desconto = 0.20;
        console.log("20% de desconto");
        break;
    case "DESC5":
        var desconto = 0.25;
        console.log("25% de desconto");
        break;
    default:
      
        console.log("Erro: Código promocional inválido");
        break;
}

var valorComDesconto = valorOriginal - (valorOriginal * desconto);

console.log("Valor original: R$ " + valorOriginal);
console.log("Valor com desconto: R$ " + valorComDesconto.toFixed(2)); TT
