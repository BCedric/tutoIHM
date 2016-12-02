import { Component, Input } from '@angular/core';
import { Post } from './models/post.model';
import { Person } from './models/person.model';

@Component({
    selector: 'actualite',
    templateUrl: './app/actualite.component.html'
})
export class ActualiteComponent {
    
    posts: Post [] = [
        new Post("Hi", "Aujoud'hui j'ai promenais mon poney ! ", new Person("Francis", "DUPONT", "francis.png", "francis.dupont@univ.fr")),
        new Post(":)", "Youpiiii je suis très content !!", new Person("Francis", "DUPONT", "francis.png", "francis.dupont@univ.fr"))
    ];

}