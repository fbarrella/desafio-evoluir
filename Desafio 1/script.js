/*1. Obtenha o numero total de vogais em uma frase!
Crie uma função que retornará o número de vogais encontradas em uma string. Essa é uma ótima maneira de 
praticar a coleta de informações sobre um conjunto de dados. Quando você utilizar JavaScript posteriormente 
em sua carreira, estará preparado para entender do que é feito um determinado conjunto de dados (strings, 
por exemplo). Se você quiser um desafio extra, considere retornar o número total de caracteres.*/

function vogais(frase) {
    let semAcento = frase.normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    let minusc = semAcento.toLowerCase()
    let totVogal = 0
    for (let i = 0; i <= minusc.length; i++) {
        if (minusc.charAt(i) == 'a' || minusc.charAt(i) == 'e' || minusc.charAt(i) == 'i' || minusc.charAt(i) == 'o' || minusc.charAt(i) == 'u') {
            totVogal += 1
        }
    }
    return totVogal
}

let res = 'Digite sua frase aqui'
if (res.length == 0) {
    console.log('Erro, digite uma frase')
} else {
    console.log(`A frase possui um total de ${res.length} caracteres, sendo ${vogais(res)} vogais.`)
}
