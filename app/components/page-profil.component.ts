import { Component, Input } from '@angular/core';
import { Person } from '../models/person.model';
import { Post } from '../models/post.model';

@Component({
    selector: 'page-profil',
    templateUrl: './app/components/page-profil.component.html'
})
export class PageProfilComponent {
    person : Person = new Person("Prémon", "NOM","profil.png", "prenom.nom@univ.fr");
}