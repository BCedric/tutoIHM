import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualiteComponent } from './components/actualite.component';
import { ListeAmisComponent } from './components/liste-amis.component';

const appRoutes: Routes = [
    {
        path: 'actualite',
        component: ActualiteComponent
    },
    {
        path: 'liste-amis',
        component: ListeAmisComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

