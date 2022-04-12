import {Component, OnInit} from '@angular/core';
import {AuteursService} from "../../services/auteurs/auteurs.service";
import {LivresService} from "../../services/livres/livres.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {
  livresService: LivresService;
  public livresForm: FormGroup;


  constructor(livresService: LivresService, fb: FormBuilder) {
    this.livresService = livresService;
    this.livresForm = fb.group({
      titre: '',
      genre: '',
      resume: '',
      auteur: '',
      dateParution: ''
    });
  }

  ngOnInit(): void {
  }

  onModify(): void {

  }

  onDelete(): void {
    this.livresService.deleteLivre()



  }

  onValider(): void{

    const titre = this.livresForm.get('titre')?.value
    const genre = this.livresForm.get('genre')?.value
    const resume = this.livresForm.get('resume')?.value
    const auteur = this.livresForm.get('auteur')?.value
    const dateParution = this.livresForm.get('dateParution')?.value

    this.livresService.addLivre(titre, genre, resume, auteur, dateParution)


  }

}
