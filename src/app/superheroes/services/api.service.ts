import { Superhero } from './../interfaces/superhero.interface';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl: string = 'https://superhero-search.p.rapidapi.com/api/';
  private headers: HttpHeaders = new HttpHeaders({
    'X-RapidAPI-Key': 'b31c392cbfmsh56cbc0c98142362p12024cjsn87b85b5b8679',
    'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
  });

  public superhero?: Superhero;
  public error?: string;

  constructor(private http: HttpClient) {}

  getSuperhero(heroName: string): Observable<Superhero> {
    const options: { headers: HttpHeaders; params: HttpParams } = {
      headers: this.headers,
      params: new HttpParams().set('hero', heroName),
    };
    return this.http.get<Superhero>(this.apiUrl, options).pipe(
      catchError((error) => {
        console.log(error);
        throw new Error('No se pudo hacer la petición');
      })
    );
  }


}
