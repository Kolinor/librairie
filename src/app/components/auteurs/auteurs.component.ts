import {Component, OnInit} from '@angular/core';
import {AuteursService} from "../../services/auteurs/auteurs.service";

@Component({
  selector: 'app-auteurs',
  templateUrl: './auteurs.component.html',
  styleUrls: ['./auteurs.component.css']
})
export class AuteursComponent implements OnInit {
  auteursService: AuteursService;

  constructor(auteursService: AuteursService) {
    this.auteursService = auteursService;
  }

  ngOnInit(): void {
  }

  onModify(): void {

  }

  onDelete(): void {


  }
}
