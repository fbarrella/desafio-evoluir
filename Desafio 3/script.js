/*3. Contador de horas assustadoras!
Suponha que recebemos um relógio que apita toda vez que uma hora "assustadora" aparece. Esse relógio 
mostra a hora como 'HH:MM', onde HH é a hora e MM são os minutos. Digamos que um momento é considerado 
assustador se esse estiver formatado como AB:AB, AA:BB, AB:BA ou AA:AA. Faça um método que receba uma 
lista 'str momentos[]', onde cada elemento representa um único momento de tempo. Retorne quantas vezes 
o relógio apitou. Por exemplo, para uma entrada ["11:00", "13:13", "10:00"], o resultado seria 2.*/

let horas = ['10:10', '11:00', '13:31', '22:22', '14:47', '22,25', '14:14']
let bips = 0
for (let i = 0; i < horas.length; i++) {
    if (horas[i].charAt(0) == horas[i].charAt(3) && horas[i].charAt(1) == horas[i].charAt(4)) {
        bips += 1
    } else if (horas[i].charAt(0) == horas[i].charAt(1) && horas[i].charAt(3) == horas[i].charAt(4)) {
        bips += 1
    } else if (horas[i].charAt(0) == horas[i].charAt(4) && horas[i].charAt(1) == horas[i].charAt(3)) {
        bips += 1
    }
}
console.log(`Foram registrados ${bips} momentos assustadores.`)