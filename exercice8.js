let prix = 0, somme = 0, arendre = 0;
let input = "" ;

while (input !== "valider") {
    input= prompt("Veuilez saisir un prix - Saisir 'valider' pour finaliser");
    if (!isNaN(input)) {
        input= parseInt(input,10);
        somme += input;
    }
    if (input !== "valider" && isNaN(input)) {
        console.log("Veuilez saisir un prix en nombres");
    }   
}

console.log(`Prix total : ${somme} €`);


 while (isNaN(input) || input < somme ) {
    input= prompt("Veuilez saisir votre paiement");
    if (!isNaN(input)) {
        input= parseInt(input,10);
        prix += input;
    }
   if (isNaN(input)) {
        console.log("Veuilez saisir votre paiement en nombre");
    }
    if (input < somme) {
        prix = 0;
        console.log("Veuilez saisir un nombre supérieur au prix");
    }
}

console.log(`Argent donné : ${prix} €`);

arendre = prix - somme;

console.log(`Monnaie à rendre : ${arendre} €`);

if(arendre === 0) {
    console.log(`Le compte est bon, merci de votre visite !`);
}else{


const MONNAIE = [500, 200, 100, 50, 20, 10, 5, 2, 1];
const MONNAIENOM = ['billet de 500 €','billet de 200 €','billet de 100 €','billet de 50 €','billet de 20 €','billet de 10 €','billet de 5 €','pièce de 2 €','pièce de 1 €'];

let rendumonnaie = ""

    for (i = 0; i < MONNAIE.length; i++) {
      if(arendre - MONNAIE[i] >= 0) {
        let nombrebillets = arendre/(MONNAIE[i] + (arendre % MONNAIE[i]));
        arendre -= MONNAIE[i] * nombrebillets;
        rendumonnaie += `${nombrebillets} x ${MONNAIENOM[i]}, `
      } 
    }

    console.log(`Rendu : ${rendumonnaie}merci de votre visite !`);
    alert(`Rendu : ${rendumonnaie}merci de votre visite !`)
}
