import { Component, OnInit } from '@angular/core';
import { Materiel } from 'src/app/models/materiel';
import { MaterielService } from 'src/app/services/materiel.service';

@Component({
  selector: 'app-listmateriel',
  templateUrl: './listmateriel.component.html',
  styleUrls: ['./listmateriel.component.css']
})
export class ListmaterielComponent implements OnInit {
  materiel : Materiel[] ; 
  constructor(private materielServices : MaterielService) { }
 
  ngOnInit(): void {
   this.materiel =  this.materielServices.getMateriels() ; 
  }

}
