import { Component, Input } from '@angular/core';
import { Person } from './models/person.model';

@Component({
    selector: 'liste-amis',
    templateUrl: './app/liste-amis.component.html'
})
export class ListeAmisComponent {

    amis : Person [] = [
        new Person("Francis", "DUPONT", "francis.png", "francis.dupont@univ.fr"),
        new Person("Robbie", "raidochaude", "robbie.png", "robbie.raidochaude@univ.fr"),
        new Person("Sarah", "ABOÛt", "sarah.png", "sarah.about@univ.fr"),
        new Person("helmut", "HARDALPIK", "helmut.png", "sarah.about@univ.fr"),
        new Person("Quentin", "TINCHIMILOUPETE", "quentin.png", "sarah.about@univ.fr"),
        new Person("Henriette", "LECANARFONMOINLEMALIN", "Henriette.png", "sarah.about@univ.fr")
    ];

}