import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataRequest } from '../dataRequest.service';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EmployeeListContentComponent} from "../employee-list-content/employee-list-content.component";
import {Employee} from "../Employee";
import {Iemployee} from "../iemployee";

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, EmployeeListContentComponent],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent implements OnInit{

  employeeList!: Employee[];
  filteredEmployeeList!: Employee[];

  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 0;
  constructor(private reqService: DataRequest) {
  }
  ngOnInit():void {
    this.getEmployees();
    this.initializePaginator();
  }

  filterResults(text: string) {
    if(!text) {
      this.filteredEmployeeList = this.employeeList;
    }
    this.filteredEmployeeList = this.employeeList.filter((employeeList) => {
      employeeList?.firstName.toLowerCase().includes(text.toLowerCase());
    });
    this.initializePaginator();
  }

  private getEmployees() {
    this.reqService.getEmployees().subscribe((data) => {
      this.employeeList = data;
    });
    this.filteredEmployeeList = this.employeeList;
  }

  private initializePaginator() {
    this.totalPages = Math.ceil(this.filteredEmployeeList.length / this.itemsPerPage);
  }

  goToPage(pageNumber: number) {
    if(pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
    }
  }

  getPages(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }
}
