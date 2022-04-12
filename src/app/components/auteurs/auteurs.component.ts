import {Component, OnInit} from '@angular/core';
import {AuteursService} from "../../services/auteurs/auteurs.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-auteurs',
  templateUrl: './auteurs.component.html',
  styleUrls: ['./auteurs.component.css']
})
export class AuteursComponent implements OnInit {
  auteursService: AuteursService;
  public auteurForm: FormGroup;

  constructor(auteursService: AuteursService, fb: FormBuilder) {
    this.auteursService = auteursService;
    this.auteurForm = fb.group({
      nom: '',
      prenom: '',
      age: ''
    });
  }

  ngOnInit(): void {
  }

  onModify(): void {



  }

  onDelete(): void {


  }

  onValider(): void {

    const nom = this.auteurForm.get('nom')?.value
    const prenom = this.auteurForm.get('prenom')?.value
    const age = this.auteurForm.get('age')?.value

    this.auteursService.addAuteur(nom, prenom, age, [])


  }
}
