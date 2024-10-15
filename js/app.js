const prezzoPerKm = 0.21 // numb

const kmUtente = prompt('Quanti chilometri dovrai percorrere?')

let calcoloCosto = prezzoPerKm * kmUtente // numb
console.log('Questo è il costo totale per i tuoi km:', calcoloCosto, '€') 

const etàUtente = prompt('Vuoi scoprire se hai diritto ad uno dei nostri sconti? Inserisci la tua età!')

const minorenne = 18 // numb
let scontoVenti = calcoloCosto * 20 / 100 // numb

const over65 = 65 // numb
let scontoQuar = calcoloCosto * 40 / 100 // numb

let infoSconto = 'Ci dispiace non hai diritto a nussuno sconto :(' //string

if (etàUtente < minorenne) {
    infoSconto = 'Congratulazioni hai diritto ad uno sconto del 20%! Il tuo costo sarà di: ' + (calcoloCosto - scontoVenti)
}
else if (etàUtente >= over65) {
    infoSconto = 'Congratulazioni hai diritto ad uno sconto del 40%! Il tuo costo sarà di: ' + (calcoloCosto - scontoQuar)
}

console.log(infoSconto)