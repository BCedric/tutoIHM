import { Component, Input } from '@angular/core';
import { Person } from './models/person.model';

@Component({
    selector: 'liste-amis',
    templateUrl: './app/liste-amis.component.html'
})
export class ListeAmisComponent {
    @Input() amis : Person[]
}