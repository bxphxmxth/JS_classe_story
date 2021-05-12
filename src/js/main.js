let classeCoding19 = [];


let ajouter  = (prenom, phrase) =>{

        classeCoding19.push(prenom);
        console.log(phrase);


}

let retirer = (prenom, phrase, nbr) =>{

    classeCoding19.splice(classeCoding19.indexOf(prenom),nbr);
    console.log(phrase);
}

ajouter("Fanny", " Il est 8h43, Fanny rentre en classe.");

ajouter("Chris", "Il est 8h44, Chris allume son PC et met à jour ses notes.");

ajouter("Nasila", `8h45 Nasila rejoint la classe`);
ajouter("Stan", " 8h45 Stan rejoint la classe");
ajouter("Mouna", "8h45 Mouna rejoint la classe");
ajouter("Jean", "8h45 Jean rejoint la classe");

retirer("Stan", "Stan et Jean suivent le chat", 2);
retirer("Jean", "jean et Jean suivent le chat", 2);

console.log(classeCoding19);


ajouter("Ali", "Ali rentre en classe et fait un max de bruit");
ajouter("Agim","Agim rentre en classe et fait un max de bruit");

ajouter("Antoine", "Antoine rentre en classe");
retirer("Antoine","Antoine redescend prendre un café avant le cours",1);

ajouter("Yassine", "Yassine arrive avec sa petite plante dans les mains");

ajouter("Seif", "Seif rentre tranquillement");
ajouter("Haroune", "Haroune rentre tranquillement aussi");

ajouter("Elvis", "Elvis rentre et observe naz");
ajouter("Ilias x 2 ", "Les Ilias rentrent et observent naz");

ajouter("Kevin", "Kevin rentre en classe");

ajouter("Van Hoa", "Van Hoa rentre en classe");
ajouter("Nathan", "Nathan rentre en classe");
retirer("Fanny", "Fanny sort", 1);
console.log(classeCoding19);

ajouter("Adil", "Adil rentre en classe");

ajouter("Fanny", "Fanny retourne en classe en donne cours");

ajouter("Lira", "Lira rentre en classe en faisant un minimum de bruit");

console.log(classeCoding19);









