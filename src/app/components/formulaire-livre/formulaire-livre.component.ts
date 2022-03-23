import {Component, OnInit} from '@angular/core';
import {AuteursService} from "../../services/auteurs/auteurs.service";
import {LivresService} from "../../services/livres/livres.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-formulaire-livre',
  templateUrl: './formulaire-livre.component.html',
  styleUrls: ['./formulaire-livre.component.css']
})
export class FormulaireLivreComponent implements OnInit {
  livresService: LivresService;
  livreForm: FormGroup;

  constructor(livresService: LivresService, fb: FormBuilder) {
    this.livresService = livresService;
    this.livreForm = fb.group({
      titre: '',
      datePublication: '',
      auteurLivre: '',
      comment: '',
      numbers: fb.array([
        new FormControl()
      ])
    });
  }

  ngOnInit(): void {
  }

  onValider(): void {

  }
}
