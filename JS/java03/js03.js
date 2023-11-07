
const frutas = ['Maçã', 'Banana', 'Morango', 'Pêssego', 'Abacaxi', 'Uva', 'Cereja', 'Melancia', 'Manga', 'Kiwi'];


const frutaComEspaco = 'Pêssego com Espaço';
const frutasAleatorias = selecionarFrutasAleatorias(frutas, 4);


frutasAleatorias.push(frutaComEspaco);


frutasAleatorias.forEach((fruta, index) => {
   
    const lengthFruta = fruta.length;

   
    const substringFruta = fruta.substring(0, 3);

    
    const frutaSemEspacos = fruta.trim();

   
    const frutaLowerCase = fruta.toLowerCase();

    
    console.log(`Fruta ${index + 1}: ${fruta} - Letras: ${lengthFruta} - 3 primeiros caracteres: ${substringFruta} - Sem espaços: ${frutaSemEspacos} - Lowercase: ${frutaLowerCase}`);
});


function selecionarFrutasAleatorias(array, quantidade) {
    const frutasSelecionadas = [];
    for (let i = 0; i < quantidade; i++) {
        const indiceAleatorio = Math.floor(Math.random() * array.length);
        frutasSelecionadas.push(array[indiceAleatorio]);
        array.splice(indiceAleatorio, 1); 
    }
    return frutasSelecionadas;
}
