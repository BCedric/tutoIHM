export class Person {
    prenom   : string;
    nom     : string;
    urlPhoto : string;
    mail     : string;

    constructor (prenom, nom, urlPhoto, mail) {
        this.prenom   = prenom;
        this.nom      = nom;
        this.urlPhoto = urlPhoto;
        this.mail     = mail;
    }
}