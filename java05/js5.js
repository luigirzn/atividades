console.log("1 a 50 (while)");
let contadorWhile = 1;
while (contadorWhile <= 50) {
    console.log(contadorWhile);
    contadorWhile++;
}
console.log("\n");


console.log("10 até 0 (do-while)");
let contadorDoWhile = 10;
do {
    console.log(contadorDoWhile);
    contadorDoWhile--;
} while (contadorDoWhile >= 0);
console.log("\n");


console.log("1 a 100 (for");
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
