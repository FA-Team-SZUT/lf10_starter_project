import { Injectable } from '@angular/core';
import { Employee } from './Employee';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Qualification } from './Qualification';

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
    return this.http.get<Qualification[]>('/backend/qualifications');
  }
  deleteQualification(id: number) {
    return this.http.delete<any>(`/backend/qualifications/${id}`);
  }
  handleDeleteOfQualification(id: number, skillSet: string) {
    this.findEmployeeByQualification(id).subscribe((data) => {
      data.employees.forEach((emp: Employee) => {
        if (emp.id) {
          this.deleteQualificationById(emp.id, skillSet).subscribe();
        }
      });
    });
    return this.deleteQualification(id);
  }

  updateQualification(id: number, skillSet: string) {
    return this.http.put<any>(`/backend/qualifications/${id}`, {
      skill: skillSet,
    });
  }
  createQualification(skillSet: string) {
    return this.http.post<any>(`/backend/qualifications`, { skill: skillSet });
  }
  findEmployeeByQualification(id: number) {
    return this.http.get<any>(`/backend/qualifications/${id}/employees`);
  }
  deleteQualificationById(id: number, skillSet: string) {
    const headers = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    });
    const body = { skill: skillSet };
    return this.http.delete(`/backend/employees/${id}/qualifications`, {
      body,
      headers,
    });
  }
}
