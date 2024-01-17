import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataRequest } from '../dataRequest.service';

@Component({
  selector: 'app-qualifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './qualifications.component.html',
  styleUrl: './qualifications.component.css',
})
export class QualificationsComponent {
  constructor(private reqService: DataRequest) {}
  ngOnInit() {
    const value = this.reqService.giveBack();
    console.log('this is printed', value);
  }
}
