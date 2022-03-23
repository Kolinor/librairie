import {Injectable} from '@angular/core';
import {Auteur} from "../../models/auteur/auteur.model";
import {Livre} from "../../models/livre/livre.model";

@Injectable({
  providedIn: 'root'
})
export class AuteursService {
  auteurs: Array<Auteur>;

  constructor() {
    this.auteurs = new Array<Auteur>();
  }

  getAuteurs() {
    return this.auteurs;
  }

  addAuteur(nom: String | undefined, prenom: String | undefined, age: number | undefined, livres: Array<Livre> | undefined) {
    this.auteurs?.push(new Auteur(nom, prenom, age, livres));
  }
}

