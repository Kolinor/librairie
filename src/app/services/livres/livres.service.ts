import {Injectable} from '@angular/core';
import {Auteur} from "../../models/auteur/auteur.model";
import {Livre} from "../../models/livre/livre.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuteursService} from "../auteurs/auteurs.service";

@Injectable({
  providedIn: 'root'
})
export class LivresService {
  livres: Array<Livre>;
  auteurService: AuteursService;

  constructor(private http: HttpClient, auteurService: AuteursService,) {
    this.livres = new Array<Livre>();
    this.auteurService = auteurService;
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    const requestOptions = {
      headers
    };

    this.http.get('http://192.168.1.191:3001/livres', requestOptions).subscribe({
      next: data => {
        const resultats: any = data;
        // @ts-ignore
        resultats.forEach(resultat => {
          const auteur = new Auteur(resultat.auteur.auteurId, resultat.auteur.nom, resultat.auteur.prenom, resultat.auteur.age, []);
          this.livres?.push(new Livre(resultat.livreId, resultat.titre, resultat.genre, resultat.resume, auteur, resultat.dateParution));
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

  addLivre(titre: String | undefined, genre: String | undefined, resume: String | undefined, auteurId: Number | undefined, dateParution: String | undefined) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    const requestOptions = {
      headers
    };
    const auteurs = this.auteurService.getAuteurs();
    const index = auteurs.findIndex(auteur => auteur.getAuteurId() === auteurId);
    const auteur = auteurs[index];

    this.http.post('http://192.168.1.191:3001/livre', {
      titre,
      genre,
      resume,
      auteur: {
        auteurId,
        nom: auteur.getNom(),
        prenom: auteur.getPrenom(),
        age: auteur.getAge()
      },
      dateParution
    }, requestOptions).subscribe({
      next: data => {
        const resultat: any = data;
        const auteur = new Auteur(resultat.auteur.auteurId, resultat.auteur.nom, resultat.auteur.prenom, resultat.auteur.age, []);
        this.livres?.push(new Livre(resultat.livreId, resultat.titre, resultat.genre, resultat.resume, auteur, resultat.dateParution));
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
    this.http.delete('http://192.168.1.191:3001/livre/' + livreId, requestOptions).subscribe({
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
