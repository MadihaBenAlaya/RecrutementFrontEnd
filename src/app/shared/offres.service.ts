import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OffresService {

  constructor(private http : HttpClient, private fb : FormBuilder) { }
  readonly BaseURI = 'https://localhost:44390/api';

  getOffres(){
    return this.http.get(this.BaseURI+ '/Offre');
  }

}
