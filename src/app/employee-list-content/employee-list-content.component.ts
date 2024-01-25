import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Employee} from "../Employee";

@Component({
  selector: 'app-employee-list-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list-content.component.html',
  styleUrl: './employee-list-content.component.css'
})
export class EmployeeListContentComponent {
  @Input() employeeList!: Employee;
}
