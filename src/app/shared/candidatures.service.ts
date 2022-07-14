import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidaturesService {

  constructor(private http : HttpClient, private fb : FormBuilder) { }
  readonly BaseURI = 'https://localhost:44390/api';

  getCandidatures(){
    return this.http.get(this.BaseURI+ '/Candidature');
  }

  formModel = this.fb.group({
    date_postulation: [, [Validators.required]],
    etat: [,],
    curriculum_Vitae: [, [Validators.required]],
    score: [,],

  })

  PostCandidatures (CVPath){
    var body = {
      date_postulation: this.formModel.value.date_postulation,
      etat: this.formModel.value.etat,
      curriculum_Vitae: CVPath,
      score: this.formModel.value.score

    };
    return this.http.post( this.BaseURI +'/Candidature', body);
  }
}
