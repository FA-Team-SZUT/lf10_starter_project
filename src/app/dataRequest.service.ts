import { Injectable } from '@angular/core';
import { Employee } from './Employee';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataRequest {
  bearer = '';
  employees$: Observable<Employee[]> = new Observable();
  constructor(private http: HttpClient) {}
  giveBack() {
    return 'Hello world';
  }
  getEmployees() {
    return this.http.get<Employee[]>('/backend/employees', {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`),
    });
  }
  getQualifications() {
    return this.http.get<Employee[]>('/backend/qualifications', {
      withCredentials: true,
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`),
    });
  }
}
