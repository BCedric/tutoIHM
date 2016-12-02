import { Component, Input } from '@angular/core';
import { Person } from './models/person.model';
import { Post } from './models/post.model';

@Component({
    selector: 'page-profil',
    templateUrl: './app/page-profil.component.html'
})
export class PageProfilComponent {
    yassine : Person = new Person("Yassine", "BENZIRAR","yassine.png", "sjhf@ksndf.sj");
}