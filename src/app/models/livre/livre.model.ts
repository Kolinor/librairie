import {Auteur} from "../auteur/auteur.model";

export class Livre {
  private titre: String | undefined;
  private resume: String | undefined;
  private genre: String | undefined;
  private auteur: Auteur | undefined;
  private dateParution: String | undefined;

  constructor(titre: String | undefined, genre: String | undefined, resume: String | undefined, auteur: Auteur | undefined, dateParution: String | undefined) {
    this.titre = titre;
    this.genre = genre;
    this.resume = resume;
    this.auteur = auteur;
    this.dateParution = dateParution;
  }

  getTitre(){
    return this.titre;
  }

  getGenre() {
    return this.genre;
  }

  getResume() {
    return this.resume;
  }

  getAuteur() {
    return this.auteur;
  }

  getParution() {
    return this.dateParution;
  }
}
