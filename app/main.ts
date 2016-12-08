import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from '@angular/material';

import { AppComponent }  from './components/app.component';
import { ListeAmisComponent } from './components/liste-amis.component';
import { PageProfilComponent } from './components/page-profil.component';
import { ActualiteComponent } from './components/actualite.component';

import { routing } from './app.routing';

@NgModule({
  imports: [ 
    BrowserModule,
    MaterialModule.forRoot(),
    routing
  ],
  declarations: [ 
    AppComponent ,
    ListeAmisComponent ,
    PageProfilComponent ,
    ActualiteComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);