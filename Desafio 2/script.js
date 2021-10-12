/*2. Quanto pontos Marvin fez?
Marvin é viciado em 'Angry Birds', tanto que se tornou famoso nas proximidades de Santos. 
O jogo possui várias etapas, e para cada etapa o jogador pode ganhar entre 0, 1, 2 ou 3 estrelas. 
Seu método deve receber um valor de lista (array) 'str result[]', contendo os resultados das partidas 
de Marvin. Para cada estágio, o índice 'i' da lista 'result' (result[i]) contém um elemento que 
especifica o resultado de Marvin naquele estágio. Por exemplo, se ele obteve 0 estrelas no estágio i, 
o result[i] seria “---”. Para 1 estrela, o resultado [i] seria “*--” e assim por diante. 

Faça um método que retorne o número total de estrelas que Marvin possui no momento.*/

let result = [0, 2, 2, 3, 1, 2, 3, 3, 2]
let found = result.some(element => element < 0 || element > 3)
if (found == true) {
    console.log('Erro, o valor da pontuação deve ser entre 0 e 3')
} else {
    let soma = 0

    for (let c = 0; c < result.length; c++) {
        soma += result[c]
    }
    for (let i = 0; i <= result.length; i++) {
        if (result[i] == 0) {
            result[i] = '(---)'
            console.log(`Estágio ${i}: Pontuação ${result[i]}`)
        } else if (result[i] == 1) {
            result[i] = '(*--)'
            console.log(`Estágio ${i}: Pontuação ${result[i]}`)
        } else if (result[i] == 2) {
            result[i] = '(**-)'
            console.log(`Estágio ${i}: Pontuação ${result[i]}`)
        } else if (result[i] == 3) {
            result[i] = '(***)'
            console.log(`Estágio ${i}: Pontuação ${result[i]}`)
        }
    }
    console.log(`Marvin possui um número total de ${soma} estrelas.`)
}
