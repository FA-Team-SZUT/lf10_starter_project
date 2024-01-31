import { Injectable } from "@angular/core";
import { Employee } from "./Employee";
import { BehaviorSubject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Qualification } from "./Qualification";
interface EmployeeResp {
  id: number;
  lastName: string;
  firstName: string;
}
interface QualificationResp {
  skill: string;
  id: number;
}
interface SearchedEmployees {
  qualification: QualificationResp;
  employees: EmployeeResp[];
}

@Injectable({
  providedIn: "root",
})
export class DataRequest {
  searchEmployee$ = new BehaviorSubject(14);
  constructor(private http: HttpClient) {}
  getEmployees() {
    let val = this.http.get<any>("/backend/employees");
    console.log("what is here", val);
    return val;
  }
  getQualifications() {
    return this.http.get<Qualification[]>("/backend/qualifications");
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
    return this.http.get<SearchedEmployees>(
      `/backend/qualifications/${id}/employees`
    );
  }
  deleteQualificationById(id: number, skillSet: string) {
    const headers = new HttpHeaders({
      Accept: "application/json",
      "Content-Type": "application/json",
    });
    const body = { skill: skillSet };
    return this.http.delete(`/backend/employees/${id}/qualifications`, {
      body,
      headers,
    });
  }
  getEmployeesById(id: string | null) {
    return this.http.get<Employee>('/backend/employees/' + id, {
      withCredentials: true,
    });
  }

  deleteEmployee(id: number | undefined) {
    return this.http.delete('/backend/employees/' + id, {
      withCredentials: true,
    });
  }
}
