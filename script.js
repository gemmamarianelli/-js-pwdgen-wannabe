let nome = prompt("inserisci il nome");
let cognome = prompt("inserisci il cognome");
let colore = prompt("inserisci colore preferito");

console.log(
    `
        Nome: ${nome}
        Cognome: ${cognome}
        Colore: ${colore}
    `
);

document.getElementById("p-nome").innerHTML = "Il nome inserito è: " + nome;
document.getElementById("p-cognome").innerHTML = cognome;
document.getElementById("p-colore").innerHTML = colore;

console.log(
    
)