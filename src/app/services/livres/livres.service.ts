import {Injectable} from '@angular/core';
import {Auteur} from "../../models/auteur/auteur.model";
import {Livre} from "../../models/livre/livre.model";

@Injectable({
  providedIn: 'root'
})
export class LivresService {
  livres: Array<Livre>;

  constructor() {
    this.livres = new Array<Livre>();
  }

  getLivres() {
    return this.livres;
  }

  addLivre(titre: String | undefined, genre: String | undefined, resume: String | undefined, auteur: Auteur | undefined, dateParution: Date | undefined) {
    this.livres?.push(new Livre(titre, genre, resume, auteur, dateParution));
  }
}
