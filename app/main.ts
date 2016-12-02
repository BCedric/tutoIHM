import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent }  from './app.component';
import { ListeAmisComponent } from './liste-amis.component';
import { ProfilComponent } from './profil.component';
import { PageProfilComponent } from './page-profil.component';
import { ActualiteComponent } from './actualite.component';

@NgModule({
  imports: [ 
    BrowserModule
  ],
  declarations: [ 
    AppComponent ,
    ProfilComponent ,
    ListeAmisComponent ,
    PageProfilComponent ,
    ActualiteComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);