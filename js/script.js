
const nomeUtente = prompt('Inserisci il tuo nome ');
const cognomeUtente = prompt(nomeUtente + ', inserisci il tuo cognome ');
const colore = prompt(`
  ${nomeUtente} ${cognomeUtente} qual è il tuo colore preferito ? 
`);

let output = nomeUtente + cognomeUtente + colore + 22;
document.getElementById('password').innerHTML = output;