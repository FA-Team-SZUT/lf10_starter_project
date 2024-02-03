import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Employee } from '../entitys/Employee';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  authenticationUrl: string = 'http://authproxy.szut.dev';
  baseUrl: string = 'http://localhost:8089/';
  bearer?: string;
  private selectedEmployeeSubject = new BehaviorSubject<Employee | null>(null);
  selectedEmployee$ = this.selectedEmployeeSubject.asObservable();

  constructor(
    private http: HttpClient,
    private keycloak: KeycloakService,
  ) {}

  public async setBearer(): Promise<void> {
    this.bearer = await this.keycloak.getToken();
  }

  public getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl + 'employees', {
      headers: this.getHeaders(),
    });
  }

  setSelectEmployee(employee: Employee | null) {
    this.selectedEmployeeSubject.next(employee);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(
      this.baseUrl + 'employees/' + employee.id,
      {
        id: employee.id,
        firstName: employee.firstName,
        lastName: employee.lastName,
        street: employee.street,
        postcode: employee.postcode,
        city: employee.city,
        phone: employee.phone,
      },
      {
        headers: this.getHeaders(),
      },
    );
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${this.bearer}`);
  }

  getEmployeeQualifications(id: number): Observable<any> {
    return this.http.get<any>(
      this.baseUrl + 'employees/' + id + '/qualifications',
      {
        headers: this.getHeaders(),
      },
    );
  }
}