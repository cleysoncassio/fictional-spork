import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarcaTextoDirective } from './shared/directives/marca-texto.directive';
import { PeopleService } from './shared/services/people.service';
import { ListPeopleComponent } from './shared/components/list-people/list-people.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcaTextoDirective,
    ListPeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PeopleService], //"5" exportado de people.service, check lá emcima nos eexports
  bootstrap: [AppComponent]
})
export class AppModule { }
