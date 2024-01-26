import { Component } from "@angular/core";
import { CommonModule, Location } from "@angular/common";
import { DataRequest } from "../dataRequest.service";
import { map } from "rxjs";

interface EmployeeResp {
  id: number;
  lastName: string;
  firstName: string;
}

interface QualificationResp {
  skill: string;
  id: number;
}

@Component({
  selector: "app-employee-search-result",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./employee-search-result.component.html",
  styleUrl: "./employee-search-result.component.css",
})
export class EmployeeSearchResultComponent {
  searchResp: EmployeeResp[] = [];
  constructor(private reqService: DataRequest, private location: Location) {}
  handleGoBack() {
    this.location.back();
  }
  qualification: string = "";
  ngOnInit() {
    this.reqService.searchEmployee$.subscribe((employeeId) => {
      this.reqService
        .findEmployeeByQualification(employeeId)
        .pipe(
          map((res) => {
            this.qualification = res.qualification.skill;
            return res.employees;
          })
        )
        .subscribe((res) => {
          this.searchResp = res;
        });
    });
  }
}
