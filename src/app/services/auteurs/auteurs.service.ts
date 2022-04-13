import {Injectable} from '@angular/core';
import {Auteur} from "../../models/auteur/auteur.model";
import {Livre} from "../../models/livre/livre.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuteursService {
  auteurs: Array<Auteur>;

  constructor(private http: HttpClient) {
    this.auteurs = new Array<Auteur>();
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    const requestOptions = {
      headers
    };

    this.http.get('http://192.168.1.191:3001/autors', requestOptions).subscribe({
      next: data => {
        const resultats: any = data;
        // @ts-ignore
        resultats.forEach(resultat => {
          this.auteurs?.push(new Auteur(resultat.auteurId, resultat.nom, resultat.prenom, resultat.age, resultat.livres));
        });
      },
      error: error => {
        console.error('There was an error!', error.message);
      }
    });
  }

  getAuteurs() {
    return this.auteurs;
  }

  addAuteur(nom: String | undefined, prenom: String | undefined, age: number | undefined, livres: Array<Livre> | undefined) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    const requestOptions = {
      headers
    };
    this.http.post('http://192.168.1.191:3001/autors', {
      nom,
      prenom,
      age
    }, requestOptions).subscribe({
      next: data => {
        const resultat: any = data;
        this.auteurs?.push(new Auteur(resultat.auteurId, resultat.nom, resultat.prenom, resultat.age, livres));
      },
      error: error => {
        console.error('There was an error!', error.message);
      }
    });
  }

  deleteAuteur(auteurId: Number) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    const requestOptions = {
      headers
    };
    this.http.delete('http://192.168.1.191:3001/autor/' + auteurId, requestOptions).subscribe({
      next: data => {
        const index = this.auteurs.findIndex(auteur => auteur.getAuteurId() === auteurId);
        this.auteurs.splice(index, 1);
      },
      error: error => {
        console.error('There was an error!', error.message);
      }
    });
  }
}
