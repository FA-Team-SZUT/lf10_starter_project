import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Observable } from "rxjs";
import { Employee } from "../Employee";
import { DataRequest } from "../dataRequest.service";

@Component({
  selector: "app-employee-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./employee-list.component.html",
  styleUrl: "./employee-list.component.css",
})
export class EmployeeListComponent {
  constructor(private reqService: DataRequest) {}
  employees$: Observable<Employee[]> = new Observable();
  ngOnInit() {
    this.employees$ = this.reqService.getEmployees();
  }
}
