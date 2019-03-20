import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BetaRequest } from './interfaces/beta-request';

@Injectable({
  providedIn: 'root'
})
export class ApiProviderService {
  loading: boolean;
  constructor(private http: HttpClient) {
    this.loading = false;
  }

  signUp(data: BetaRequest): Observable<any> {
    console.log(data);
    // return this.http.post('http://localhost:8080', data);
    return this.http.get('https://reqres.in/api/users/2');
  }

}
