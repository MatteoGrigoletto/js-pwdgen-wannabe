
// nome utente
const nome= prompt('inserisci nome utente');
// cognome utente
const cognome= prompt('inserisci cognome utente');
//colore utente
let colore= prompt('inserisci colore utente');
//genero password
const userPassword = `La tua password e':
 ${nome}${cognome}${colore}76`;
//stampo password su file html
document.getElementById('password').innerHTML = userPassword;

