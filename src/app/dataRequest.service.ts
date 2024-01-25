import { Injectable } from '@angular/core';
import { Employee } from './Employee';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataRequest {
  employees$: Observable<Employee[]> = new Observable();
  constructor(private http: HttpClient) {}
  getEmployees() {
    return this.http.get<Employee[]>('/backend/employees', {
      withCredentials: true,
    });
  }
  getQualifications() {
    return this.http.get<Employee[]>('/backend/qualifications', {
      withCredentials: true,
    });
  }
  getEmployeesById(id: string | null) {
    return this.http.get<Employee[]>('/backend/employees/' + id, {
      withCredentials: true,
    });
  }
}
