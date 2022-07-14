import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private url: string = 'https://localhost:44390/api/file';
  constructor(private http: HttpClient) { }

  public upload(formData: FormData) {
    return this.http.post(`${this.url}/upload`, formData, {
        reportProgress: true,
        observe: 'events',
    });
  }

  public download() {
    return this.http.get(`${this.url}/download`, {});
}
}
