import { Component, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { Person } from '../models/person.model';

@Component({
    selector: 'actualite',
    templateUrl: './app/components/actualite.component.html',
    styles : ['.right{padding-right: 30px;}']
})
export class ActualiteComponent {
    
    posts: Post [] = [
        new Post(":)", "Aujoud'hui j'ai promenais mon poney ! ", new Person("Henriette", "LECANARFONMOINLEMALIN", "Henriette.png", "sarah.about@univ.fr")),
        new Post("Hi", "Yopiii ... bientôt le weel end :)", new Person("Francis", "DUPONT", "francis.png", "francis.dupont@univ.fr")),
        new Post("Hi", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit", new Person("Sarah", "ABOÛt", "sarah.jpg", "sarah.about@univ.fr")),
        new Post("Hi", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit", new Person("Quentin", "TINCHIMILOUPETE", "quentin.png", "sarah.about@univ.fr"))
    ];

}