import { Component, Input } from '@angular/core';
import { Post } from './models/post.model';

@Component({
    selector: 'actualite',
    templateUrl: './app/actualite.component.html'
})
export class ActualiteComponent {
    @Input() posts: Post [];
}