import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {DataRequest} from "../dataRequest.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css'
})
export class EmployeeDetailComponent implements OnInit{
    selectedEmployee: any;
    constructor(private route: ActivatedRoute, private reqService: DataRequest) {
    }
    ngOnInit():void {
      const id = this.route.snapshot.paramMap.get('id');
        this.reqService.getEmployeesById(id).subscribe((data) => {
            this.selectedEmployee = data;
        });
    }

}
