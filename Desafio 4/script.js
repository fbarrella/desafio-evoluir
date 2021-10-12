/*4. Campeão do campeonato!
Nas ligas de futebol, o vencedor de uma partida recebe 3 pontos e o perdedor 0 pontos. Em caso de empate, 
ambas as equipes recebem 1 ponto cada. Dado as listas 'int vitorias[]' e 'int empates[]', e sabendo que 
o i'ésimo elemento da lista de vitorias e empates corresponde ao número de vitórias e empates 
respectivamente para a equipe i: Faça um método que receba as listas, processe e retorne o número de 
pontos que o time campeão alcançou nesta liga.

Exemplo: Para as listas vitorias = [1,0,3] e empates = [2, 2, 0], o resultado seria 9 (a equipe em i = 2 
ganharia este campeonato).*/

let wins = [1, 0, 3]
let draw = [2, 2, 0]
let pontos = []

for (let i = 0; i < wins.length; i++) {
    pontos[i] = (wins[i] * 3 + draw[i] * 1)
}
let maior = Math.max.apply(null, pontos)
console.log(`Campeão: Equipe ${pontos.indexOf(maior)+1} com ${maior} pontos.`)

/*Alternativa:

let maior = 0

for (let c = 0; c < pontos.length; c++) {
    if (pontos[c] > maior) {
        maior = pontos[c]
    }
}
console.log (`Campeão: Equipe ${pontos.indexOf(maior)+1} com ${maior} pontos.`)*/