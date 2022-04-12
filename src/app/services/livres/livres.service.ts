import {Injectable} from '@angular/core';
import {Auteur} from "../../models/auteur/auteur.model";
import {Livre} from "../../models/livre/livre.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LivresService {
  livres: Array<Livre>;


  constructor(private http: HttpClient) {
    this.livres = new Array<Livre>();
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    const requestOptions = {
      headers
    };

    this.http.get('http://127.0.0.1:3001/livres', requestOptions).subscribe({
      next: data => {
        const resultats: any = data;
        // @ts-ignore
        resultats.forEach(resultat => {
          this.livres?.push(new Livre(resultat.livreId, resultat.titre, resultat.genre, resultat.resume, resultat.auteur, resultat.dateParution));
        });
      },
      error: error => {
        console.error('There was an error!', error.message);
      }
    });



  }

  getLivres() {
    return this.livres;
  }

  addLivre(titre: String | undefined, genre: String | undefined, resume: String | undefined, auteur: Auteur | undefined, dateParution: String | undefined) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    const requestOptions = {
      headers
    };
    this.http.post('http://localhost:3001/autors', {
      titre,
      genre,
      resume,
      auteur,
      dateParution
    }, requestOptions).subscribe({
      next: data => {
        const resultat: any = data;
        this.livres?.push(new Livre(resultat.livreId, resultat.titre, resultat.genre, resultat.resume, resultat.auteur, resultat.dateParution));
      },
      error: error => {
        console.error('There was an error!', error.message);
      }
    });
  }



  deleteLivre(livreId: Number) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    const requestOptions = {
      headers
    };
    this.http.delete('http://localhost:3001/livre/' + livreId, requestOptions).subscribe({
      next: data => {
        const index = this.livres.findIndex(livre => livre.getLivreId() === livreId);
        this.livres.splice(index, 1);
      },
      error: error => {
        console.error('There was an error!', error.message);
      }
    });
  }

}
