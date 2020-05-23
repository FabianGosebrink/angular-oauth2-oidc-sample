import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private httpClient: HttpClient) {}

  getData() {
    return this.httpClient
      .get('https://localhost:5001/api/securevalues')
      .pipe(catchError((error) => of(error)));
  }
}
