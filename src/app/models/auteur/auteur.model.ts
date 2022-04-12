import {Livre} from "../livre/livre.model";

export class Auteur {
  private auteurId: Number;
  private nom: String | undefined;
  private prenom: String | undefined;
  private age: number | undefined;
  private livres: Array<Livre> | undefined;

  constructor(auteurId: Number, nom: String | undefined, prenom: String | undefined, age: number | undefined, livres: Array<Livre> | undefined) {
    this.auteurId = auteurId;
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.livres = livres;
  }

  getAuteurId(): Number {
    return this.auteurId;
  }

  getNom() {
    return this.nom;
  }

  getPrenom() {
    return this.prenom
  }

  getAge() {
    return this.age
  }

  getLivres() {
    return this.livres
  }

}
