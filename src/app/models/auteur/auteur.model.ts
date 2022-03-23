import {Livre} from "../livre/livre.model";

export class Auteur {
  private nom: String | undefined;
  private prenom: String | undefined;
  private age: number | undefined;
  private livres: Array<Livre> | undefined;

  constructor(nom: String | undefined, prenom: String | undefined, age: number | undefined, livres: Array<Livre> | undefined) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.livres = livres;
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
