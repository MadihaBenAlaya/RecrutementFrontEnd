import { CandidaturesService } from './../shared/candidatures.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajout-candidature',
  templateUrl: './ajout-candidature.component.html',
  styleUrls: ['./ajout-candidature.component.css']
})
export class AjoutCandidatureComponent implements OnInit {

  constructor( private service : CandidaturesService) { }
  mycandidatures;

  ngOnInit(): void {
  }
  /*onSubmit() {
    this.service.PostCandidatures(this.response.dbPath).subscribe(
      (res: any) => {
          this.mycandidatures = res;
          this.service.formModel.reset();
          //this.router.navigateByUrl('/Candidatures');
          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            console.log(err);
          }
    );
  }*/

}
