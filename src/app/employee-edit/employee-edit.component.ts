import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mapTo, Observable, of, take } from 'rxjs';
import { Employee } from '../Employee';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent {
  employee: Observable<Employee>;
  @Output()
  emp: Employee;
  id;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.employee = of();
    this.emp = new Employee();
    this.fetchData();
  }

  fetchData() {
    let token = '' + localStorage.getItem('auth_token');
    this.employee = this.http.get<Employee>(`/employeeService/${this.id}`, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', token)
    });
    this.employee.subscribe(e => this.emp = e);
  }

  OnSave() {
    let token = '' + localStorage.getItem('auth_token');

    var body = {
      "lastName": this.emp.lastName,
      "firstName": this.emp.firstName,
      "street": this.emp.street,
      "postcode": this.emp.postcode,
      "city": this.emp.city,
      "phone": this.emp.phone
    }

    this.http.put<any>(`/employeeService/${this.id}`, body,  {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', token)
    }).subscribe({
      error: error => {
          console.error('There was an error!', error);
      }
    })
  }
}