import { Injectable } from '@angular/core';
import { Employee } from './Employee';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataRequest {
  bearer =
    'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE3MDU1Njg5MTYsImlhdCI6MTcwNTU2NTMxNiwianRpIjoiNzMyODI0NGQtZTcyMC00MmI4LWE3MDAtYWMxMDc0NDg1ZWQxIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiJhMmU2OGE0MS01NzVlLTQ1ZDctODFiNS1kNDlkNTBlYzNmZWMiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsicHJvZHVjdF9vd25lciIsIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.I4T4KlQTVoC-VWjxC_uxlFm7lkBo3O2cz4CTOyQxj_g68S5sRNsr5pEiMIlHuZEjK7uet1RwDvYWBULiCRizI3CuA-TB5pCW6JJV9xKWt2gVI6ltfyUQA-kS_rIrq3hSCt0AwNRtZBQlE4qJg7W8w7dVeTgj6UiBop6GTULOAxFBdWLaO9z7YqURQ2RblaW_AcleV_nyU6SUPFYdfaX_e3zEPVOWmDdgBNvteMNTmXOTU6_PxDKjK_ZUaj2lmwYWejGg4IhxZQ17sZms1gP-8_ju5LtTN2GIrOmimQhLgyx8p2Y2NAeVg5etgYXUbxmfkn1vQ6Gg9h5revG3Dwf6sQ';
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
