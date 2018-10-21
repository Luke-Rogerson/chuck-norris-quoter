import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from './quote';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private serveUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getRandomQuote(): Observable<Quote> {
    return this.http.get<Quote>(this.serveUrl + '/newJoke');
  }

  getAllQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.serveUrl + '/allJokes');
  }

}
