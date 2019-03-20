import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiProviderService {
  loading: boolean;
  constructor(private http: HttpClient) {
    this.loading = false;
  }

  signUp(data): Observable<any> {
    // return this.http.post('http://localhost:8080', data);
    return this.http.get('https://reqres.in/api/users/2', data);
  }

}
