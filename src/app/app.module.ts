import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app/app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LivresComponent} from './components/livres/livres.component';
import {AuteursComponent} from './components/auteurs/auteurs.component';
import {FormulaireAuteurComponent} from './components/formulaire-auteur/formulaire-auteur.component';
import {FormulaireLivreComponent} from './components/formulaire-livre/formulaire-livre.component';
import {AuteursService} from "./services/auteurs/auteurs.service";
import {LivresService} from "./services/livres/livres.service";
import {ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LivresComponent,
    AuteursComponent,
    FormulaireAuteurComponent,
    FormulaireLivreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuteursService,
    LivresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
