import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataRequest } from '../dataRequest.service';
import { Qualification } from '../Qualification';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-qualifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './qualifications.component.html',
  styleUrl: './qualifications.component.css',
})
export class QualificationsComponent {
  qualifications$: Observable<Qualification[]> = new Observable();
  constructor(private reqService: DataRequest) {}
  ngOnInit() {
    this.qualifications$ = this.reqService.getQualifications();
  }
}
