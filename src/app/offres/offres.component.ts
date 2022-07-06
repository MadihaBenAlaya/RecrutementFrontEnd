import { AjoutOffreComponent } from './../ajout-offre/ajout-offre.component';
import { OffresService } from './../shared/offres.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {

  constructor(private service : OffresService, public dialog: MatDialog) { }
  offres;

  ngOnInit(): void {

    this.service.getOffres().subscribe(
      res =>{
        this.offres = res;

      },
      err =>{
        console.log(err);
      }

    );

  }

  /*openDialog() {
    this.dialog.open(AjoutOffreComponent, {
      data: {
        animal: 'panda',
      },
    });
  }*/

}
