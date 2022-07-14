import { UploadComponent } from './../upload/upload.component';
import { ActivatedRoute } from '@angular/router';
import { OffresService } from './../shared/offres.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-fiche-poste',
  templateUrl: './fiche-poste.component.html',
  styles: [
  ]
})
export class FichePosteComponent implements OnInit {

  constructor(private offreService:OffresService,
    private ac:ActivatedRoute, public dialog: MatDialog) { }

    myParam;
    offreDettails;
  ngOnInit(): void {
    this.ac.paramMap.subscribe(
      res=>{
        this.myParam=(res.get('id')),
        this.offreService.getOffreById(this.myParam).subscribe(
          result=>this.offreDettails=result
          )});
  }
  openDialog() {
    this.dialog.open(UploadComponent, {
      data: {
        animal: 'panda',
      },
    });
  }

}
