import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LivresComponent} from "./components/livres/livres.component";
import {AuteursComponent} from "./components/auteurs/auteurs.component";
import {FormulaireAuteurComponent} from "./components/formulaire-auteur/formulaire-auteur.component";
import {FormulaireLivreComponent} from "./components/formulaire-livre/formulaire-livre.component";

const routes: Routes = [
  {
    path: 'livres',
    component: LivresComponent
  },
  {
    path: 'auteurs',
    component: AuteursComponent
  },
  {
    path: 'formulaireAuteur',
    component: FormulaireAuteurComponent
  },
  {
    path: 'formulaireLivre',
    component: FormulaireLivreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
