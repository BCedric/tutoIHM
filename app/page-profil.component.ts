import { Component, Input } from '@angular/core';
import { Person } from './models/person.model';
import { Post } from './models/post.model';

@Component({
    selector: 'page-profil',
    templateUrl: './app/page-profil.component.html'
})
export class PageProfilComponent {
    yassine : Person = new Person("Yassine", "BENZIRAR","yassine.png", "sjhf@ksndf.sj");
    amis : Person [] = [
        new Person("Francis", "DUPONT", "francis.png", "francis.dupont@univ.fr"),
        new Person("Robbie", "raidochaude", "robbie.png", "robbie.raidochaude@univ.fr"),
        new Person("Sarah", "ABOÛt", "sarah.png", "sarah.about@univ.fr"),
        new Person("helmut", "HARDALPIK", "helmut.png", "sarah.about@univ.fr"),
        new Person("Quentin", "TINCHIMILOUPETE", "quentin.png", "sarah.about@univ.fr"),
        new Person("Henriette", "LECANARFONMOINLEMALIN", "Henriette.png", "sarah.about@univ.fr")
    ];
    posts: Post [] = [
        new Post("Hi", "Aujoud'hui j'ai promenais mon poney ! "),
        new Post(":)", "Youpiiii je suis très content !!")
    ];
}