import { FormBuilder } from '@angular/forms';
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
}
