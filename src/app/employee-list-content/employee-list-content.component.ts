import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Employee} from "../Employee";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-list-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list-content.component.html',
  styleUrl: './employee-list-content.component.css'
})
export class EmployeeListContentComponent {
  @Input() employeeList!: Employee;
  isExpanded: boolean = false;

  constructor(private router: Router) {}

  goToDetail() {
    this.router.navigate(['/detail', this.employeeList.id]);
  }

  toggleExpand(event: Event) {
    event.stopPropagation();
    this.isExpanded = !this.isExpanded;
  }
}
