import { Person } from './person.model';

export class Post {
    titre : string;
    text  : string;
    auteur: Person;

    constructor (titre, text, auteur) {
        this.titre = titre;
        this.text  = text;
        this.auteur = auteur;
    }
}