//Variabile che mi prende il nodo HTML:
const html = document.documentElement;
//Variabile che prende l'elemento con i vari sotto-rami "body":
const body = html.children[1];
//Variabile che prende l'elemento con i vari sotto-rami "ul":
const ul = body.children[0];
//Variabile che prende il singolo elemento "li":
const myLi = ul.children[1];
//Variabile che prende il padre di "li":
const dadLi = myLi.parentElement;
//Variabile che prende l'elemento fratello precedente del secondo "li":
const firstLi = myLi.previousElementSibling;
//Variabile che prende l'elemento fratello successivo del secondo "li":
const thirdLi = myLi.nextElementSibling;

//Nodo "HTML":
console.group("Nodo principale:");
console.log(html);
console.groupEnd();
//Elemento "body":
console.group("Elemento body con vari rami:");
console.log(body);
console.groupEnd();
//Elemento "ul":
console.group("Elemento ul con vari rami:");
console.log(ul);
console.groupEnd();
//Elemento padre "li":
console.group("Elemento padre di li:");
console.log(dadLi);
console.groupEnd();
//Secondo elemento "li":
console.group("Secondo elemento li:");
console.log(myLi);
console.groupEnd();
//Primo elemento "li":
console.group("Primo elemento li:");
console.log(firstLi);
console.groupEnd();
//Terzo elemento li:
console.group("Terzo elemento li:");
console.log(thirdLi);
console.groupEnd();