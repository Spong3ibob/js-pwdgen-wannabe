const firstName = prompt("Inserisci il tuo Nome");
const lastName = prompt("Inserisci il tuo Cognome");
const favoriteColor = prompt("Inserisci il tuo colore preferito")
const password = "Ecco la tua password:" + firstName + lastName + favoriteColor + 76;
console.log(password);
document.querySelector("h1").innerHTML = password;