/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log(
  "\n--------------------------------------------Esercizio A--------------------------------------------\n"
);
let sum = 10 + 20;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log(
  "\n--------------------------------------------Esercizio B--------------------------------------------\n"
);
let random = Math.floor(Math.random() * 21);
console.log("Numero generato tra 20 e 0:", random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: 
  name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log(
  "\n--------------------------------------------Esercizio C--------------------------------------------\n"
);
const me = {
  name: "Svyatoslav",
  surname: "Gabuda",
  age: 29,
};
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log(
  "\n--------------------------------------------Esercizio D--------------------------------------------\n"
);
delete me.age;
console.log("Rimosso 'age'", me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", 
  contenente i linguaggi di programmazione che conosci.
*/
console.log(
  "\n--------------------------------------------Esercizio E--------------------------------------------\n"
);
me.skills = ["HTML", "CSS", "JS"];
console.log("Aggiunto l'array 'skills'", me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log(
  "\n--------------------------------------------Esercizio F--------------------------------------------\n"
);
me.skills.push("Nuovo elemento array");
console.log("Aggiunto elemento all'array skills", me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log(
  "\n--------------------------------------------Esercizio G--------------------------------------------\n"
);
me.skills.pop();
console.log("Rimosso elemento dall'array skills", me);

// Funzioni
console.log(
  "\n<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Funzioni >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n"
);
/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log(
  "\n--------------------------------------------Esercizio 1--------------------------------------------\n"
);
const dice = function () {
  numeroRand = Math.floor(Math.random() * 6) + 1;
  return numeroRand;
};
console.log(dice());
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log(
  "\n--------------------------------------------Esercizio 2--------------------------------------------\n"
);
const whoIsBigger = (num1, num2) => (num1 > num2 ? num1 : num2);
console.log(whoIsBigger(5, 8));
console.log(whoIsBigger(12, 3));
console.log(whoIsBigger(6, 6));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log(
  "\n--------------------------------------------Esercizio 3--------------------------------------------\n"
);
// const splitMe = function (stringa) {
//   const arrayDiStr = stringa.split(" ");
//   return arrayDiStr;
// };
const splitMe = (stringa) => stringa.split(" ");
console.log(splitMe("I love coding"));
console.log(splitMe("riceve una stringa come parametro e ritorna un'array"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log(
  "\n--------------------------------------------Esercizio 4--------------------------------------------\n"
);
const deleteOne = function (str, bool) {
  let stringaMod = "";

  if (bool === true) {
    stringaMod = str.substring(1);
  } else {
    stringaMod = str.slice(0, -1);
  }
  return stringaMod;
};
console.log(deleteOne("funzione", true));
console.log(deleteOne("funzione", false));
console.log(deleteOne("Se il valore booleano è TRUE", true));
console.log(deleteOne("Se il valore booleano è FALSE", false));
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log(
  "\n--------------------------------------------Esercizio 5--------------------------------------------\n"
);
const onlyLetters = function (str) {
  const arrElementiStr = str.split("");
  const strSenzaNumeri = [];

  for (let i = 0; i < arrElementiStr.length; i++) {
    if (Number(arrElementiStr[i])) {
    } else {
      strSenzaNumeri.push(arrElementiStr[i]);
    }
  }
  const strigaRicostruita = strSenzaNumeri.join("");
  return strigaRicostruita;
};
console.log(onlyLetters("I have 4 dogs"));
console.log(onlyLetters("3I 2ha234ve 4 do3g23s43476"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log(
  "\n--------------------------------------------Esercizio 6--------------------------------------------\n"
);
const isThisAnEmail = (str) => str.includes("@gmail.com");
console.log(isThisAnEmail("aaaaa@gmail.com"));
console.log(isThisAnEmail("aaaaa@gmaiom"));
console.log(isThisAnEmail("aaaaagmail.com"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log(
  "\n--------------------------------------------Esercizio 7--------------------------------------------\n"
);
const whatDayIsIt = () => {
  const giorniSettimana = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedi",
    "Venerdì",
    "Sabato",
  ];
  const dataDiOggi = new Date();

  const oggiIndex = dataDiOggi.getDay();

  const oggi = giorniSettimana[oggiIndex];

  return oggi;
};
console.log(whatDayIsIt());
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log(
  "\n--------------------------------------------Esercizio 8--------------------------------------------\n"
);
const rollTheDices = function (n) {
  const values = [];
  for (let i = 0; i < n; i++) {
    values.push(dice());
  }
  const somma = values.reduce((acc, cur) => acc + cur, 0);

  return { somma, values };
};
console.log(rollTheDices(5));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log(
  "\n--------------------------------------------Esercizio 9--------------------------------------------\n"
);
const howManyDays = function (data) {
  const dataOggi = new Date();
  const dataVecchia = data;
  let millisencodi = Date.parse(dataOggi) - Date.parse(dataVecchia);
  let giorni = Math.floor(millisencodi / 1000 / 60 / 60 / 24);

  return giorni;
};
console.log(howManyDays("10 Dec 2022 00:00:00 GMT"));
console.log(howManyDays("10 Dec 2022"));
console.log(howManyDays("10 Dec 2002 00:00:00 GMT"));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log(
  "\n--------------------------------------------Esercizio 10--------------------------------------------\n"
);
const isTodayMyBirthday = (data) => {
  const dataOggi = new Date();
  dataOggi.setHours(1);
  dataOggi.setMinutes(0);
  dataOggi.setSeconds(0);
  dataOggi.setMilliseconds(0);
  console.log(dataOggi);

  return data === dataOggi ? true : false;
};

console.log(isTodayMyBirthday("16 Dec 2022 "));
console.log(isTodayMyBirthday("2022-12-16T23:00:00.000Z"));

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; 
  deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

console.log(
  "\n--------------------------------------------Esercizio 11--------------------------------------------\n"
);

const oggettoProva = {
  key: "contenuto",
  key1: "contenuto1",
  key2: "contenuto2",
  key3: "contenuto3",
  key4: "contenuto4",
};
const deleteProp = (obj, prop) => {
  console.log(obj);
  console.log(prop);
  delete obj.prop;
  return;
};
console.log(deleteProp(oggettoProva, "key2"));
console.log(oggettoProva);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

console.log(
  "\n--------------------------------------------Esercizio 12--------------------------------------------\n"
);

const newestMovie = function (arrayDiFilm) {
  let filmPiuRecente = [];
  let anno = [];
  arrayDiFilm.forEach((singolofilm) => anno.push(Number(singolofilm.Year)));
  let annoPiuNuovo = Math.max(...anno);

  for (let i = 0; i < arrayDiFilm.length; i++) {
    if (annoPiuNuovo === Number(arrayDiFilm[i].Year)) {
      filmPiuRecente.push(arrayDiFilm[i]);
    }
  }
  return filmPiuRecente;
};
console.log("Il Film più recente è:", newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log(
  "\n--------------------------------------------Esercizio 13--------------------------------------------\n"
);
const countMovies = (arr) => arr.length;
console.log("Nel gruppo ci sono:", countMovies(movies), "Film");

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log(
  "\n--------------------------------------------Esercizio 14--------------------------------------------\n"
);
const onlyTheYears = (arr) => {
  const arrDiAnni = [];
  for (let i = 0; i < arr.length; i++) {
    arrDiAnni.push(arr[i].Year);
  }
  return arrDiAnni;
};
console.log(onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log(
  "\n--------------------------------------------Esercizio 15--------------------------------------------\n"
);
const onlyInLastMillennium = (arrFilm) => {
  const arrDiAnni = onlyTheYears(arrFilm);
  console.log(arrDiAnni);
  const filmScorsoMill = [];
  // const filmScorsoMill = arrFilm.map((film) =>
  //   Number(film.Year) < 2000 ? film : null
  // );
  arrFilm.forEach((singolofilm) => {
    if (Number(singolofilm.Year) < 2000) {
      filmScorsoMill.push(singolofilm);
    }
  });
  return filmScorsoMill;
};

console.log(onlyInLastMillennium(movies));
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log(
  "\n--------------------------------------------Esercizio 16--------------------------------------------\n"
);
const sumAllTheYears = (film) => {
  const arrDiAnni = onlyTheYears(film);
  let somma = 0;
  for (let i = 0; i < arrDiAnni.length; i++) {
    somma += Number(arrDiAnni[i]);
  }

  return somma;
};
console.log(sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna 
  i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log(
  "\n--------------------------------------------Esercizio 17--------------------------------------------\n"
);
const searchByTitle = (srt) => {
  const filmTro = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(srt)) {
      filmTro.push(movies[i]);
    }
  }
  return filmTro;
};
console.log(searchByTitle("Lords"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e 
  ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo,
   mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log(
  "\n--------------------------------------------Esercizio 18--------------------------------------------\n"
);
const searchAndDivide = (srt) => {
  const match = [];
  const unmatch = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(srt)) {
      match.push(movies[i].Title);
    } else {
      unmatch.push(movies[i].Title);
    }
  }

  return { match, unmatch };
};
console.log(searchAndDivide("Lord"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e 
  ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log(
  "\n--------------------------------------------Esercizio 18--------------------------------------------\n"
);
console.log("prima delete", countMovies(movies), "Film");
const removeIndex = (numero) => {
  delete movies[numero];
};
removeIndex(3);
console.log("dopo", countMovies(movies), "Film");

// // DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

// /* ESERCIZIO 20
//   Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
// */
// // const elemento = document.getElementById("container");

// /* ESERCIZIO 21
//   Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
// */
// const tdElementi = document.querySelectorAll("td");

// /* ESERCIZIO 22
//   Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
// */
// const stampaInConsole = () => {
//   const tdElementi = document.querySelectorAll("td");

//   tdElementi.forEach((tdsingolo) => console.log(tdsingolo));
// };

// /* ESERCIZIO 23
//   Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
// */
// const backRosso = () => {
//   const link = document.querySelectorAll("a");
//   for (let i = 0; i < link.length; i++) {
//     link.style.backgroundColor = "red";
//   }
// };

// /* ESERCIZIO 24
//   Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
// */
// const aggiungEl = () => {
//   const nuovoLi = document.createElement("li");
//   const listaNonO = document.getElementById("mylist");
//   listaNonO.appendChild(nuovoLi);
// };

// /* ESERCIZIO 25
//   Scrivi una funzione per svuotare la lista non ordinata con id "myList".
// */
// const svuota = () => {
//   const li = document.querySelectorAll("#my list li");

//   li.remove();
// };

// /* ESERCIZIO 26
//   Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
// */
// const aggiungTag = () => {
//   const rigaTab = document.querySelectorAll("tr");
//   for (let i = 0; i < rigaTab.length; i++) {
//     rigaTab[i].classList.add("test");
//   }
// };

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) 
  dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log(
  "\n--------------------------------------------Esercizio 27--------------------------------------------\n"
);
const halfTree = (n) => {
  let simbolo = "*";
  for (let i = 0; i < n; i++) {
    console.log("\n" + simbolo.repeat(i));
  }
};
halfTree(20);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log(
  "\n--------------------------------------------Esercizio 28--------------------------------------------\n"
);
const tree = (n) => {
  let simbolo = "*";
  let spazio = " ";
  for (let i = 1; i < n * 2; i += 2) {
    console.log("\n" + spazio.repeat((n * 2 - i) / 2) + simbolo.repeat(i));
  }
};
tree(20);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
console.log(
  "\n--------------------------------------------Esercizio 29--------------------------------------------\n"
);
const isItPrime = (numero) => {
  const numeriDivisori = [];
  let numeroPrimo = false;
  for (let i = 0; i <= numero; i++) {
    if (numero % i === 0) {
      numeriDivisori.push(i);
    }
  }
  if (numeriDivisori.length === 2) {
    numeroPrimo = true;
    console.log("il numero è primo");
  } else {
    console.log(
      "il numero non è primo e ha i seguenti divisori",
      numeriDivisori
    );
  }
  return numeroPrimo;
};
console.log(isItPrime(100));
console.log(isItPrime(41));
console.log(isItPrime(7));
console.log(isItPrime(124));

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies1 = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
