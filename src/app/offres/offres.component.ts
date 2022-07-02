import { OffresService } from './../shared/offres.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {

  constructor(private service : OffresService) { }
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

}
