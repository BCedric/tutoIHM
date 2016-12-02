import { Component, Input } from '@angular/core';
import { Person } from './models/person.model';

@Component({
    selector: 'profil',
    templateUrl: './app/profil.component.html'
})
export class ProfilComponent {
    @Input() person : Person
}