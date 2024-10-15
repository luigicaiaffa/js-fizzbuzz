// ! TRACCIA
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

// ! PROCEDURA

// # RACCOLTA DATI
// * numeri da 1 a 100
const number = 100;
// * multipli di 3
const multi3 = 3;
// * multipli di 5
const multi5 = 5;
// * preparo una variabile output message
let outputMessage;

// # ELABORAZIONE
// * PER OGNI numero da 1 a 100
for (let i = 1; i <= number; i += 1) {
  // * controllo quali numeri sono multipli di 3
  const isMulti3Valid = i % multi3 === 0;

  // * controllo quali numeri sono multipli di 5
  const isMulti5Valid = i % multi5 === 0;

  // SE il numero è multiplo di entrambi
  if (isMulti3Valid && isMulti5Valid) {
    // sostituisci numero con "FizzBuzz"
    outputMessage = "FizzBuzz";
    console.log(outputMessage);
  }

  // SE è multiplo di 3
  else if (isMulti3Valid && !isMulti5Valid) {
    // sostituisci numero con "Fizz"
    outputMessage = "Fizz";
    console.log(outputMessage);
  }

  // SE è multiplo di 5
  else if (isMulti5Valid && !isMulti3Valid) {
    // sostituisci numero con "Buzz"
    outputMessage = "Buzz";
    console.log(outputMessage);
  }

  // ALTRIMENTI
  else {
    // il numero non viene sostituito
    outputMessage = i;
    console.log(outputMessage);
  }
}

// # OUTPUT
