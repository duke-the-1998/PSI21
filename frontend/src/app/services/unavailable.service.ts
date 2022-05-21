import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable, first, catchError } from 'rxjs';

import { Unavailable } from '../models/unavailable';
import { ErrorHandlerService } from './error-handler.service';


@Injectable({
  providedIn: 'root'
})
export class UnavailableService {
  
  private url = 'http://localhost:3071/unavailable';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    ) { }

  addUnavailable(un: Unavailable): Observable<Unavailable>{
    return this.http.put<Unavailable>(this.url, {un}, this.httpOptions).pipe(
      first(),
      catchError(this.errorHandlerService.handleError<Unavailable>('addUnavailable'))
  );;
  }
  
}
