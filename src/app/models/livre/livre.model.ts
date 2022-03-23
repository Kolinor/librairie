import {Auteur} from "../auteur/auteur.model";

export class Livre {
  private titre: String | undefined;
  private resume: String | undefined;
  private auteur: Auteur | undefined;
  private dateParution: Date | undefined;

  constructor(titre: String | undefined, resume: String | undefined, auteur: Auteur | undefined, dateParution: Date | undefined) {
    this.titre = titre;
    this.resume = resume;
    this.auteur = auteur;
    this.dateParution = dateParution;
  }
}
