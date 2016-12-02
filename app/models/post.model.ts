import { Person } from './person.model';

export class Post {
    auteur : Person;
    titre : string;
    text  : string;

    constructor (titre, text, auteur) {
        this.titre = titre;
        this.text  = text;
        this.auteur = auteur;
    }
}