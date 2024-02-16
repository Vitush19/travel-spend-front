import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Travel } from './travel.model';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  private url: string = "http://localhost:8080/travel";

  constructor(private http: HttpClient) { }

  // Exemple de méthode pour récupérer des données à partir d'une API
  getTravels(): Observable<Travel> {
    // Remplacez 'https://example.com/api/data' par l'URL de votre API
    return this.http.get<Travel>(this.url);
  }

  // Exemple de méthode pour envoyer des données à une API
  sendTravel(travel: Travel): Observable<Travel> {
    // Remplacez 'https://example.com/api/save' par l'URL de votre API
    return this.http.post<Travel>(this.url, travel);
  }


}
