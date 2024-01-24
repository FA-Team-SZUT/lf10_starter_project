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
  skillProp = '';
  idProp: number = -1;
  constructor(private reqService: DataRequest) {}
  qualifications$: Observable<Qualification[]> = new Observable();

  ngOnInit() {
    this.qualifications$ = this.reqService.getQualifications();
  }

  handleProps(id: number | undefined, skill: string | undefined) {
    if (id && skill) {
      this.idProp = id;
      this.skillProp = skill;
    }
  }
  handleSave(id: number | undefined, skill: string) {
    if (id) {
      this.reqService.updateQualification(id, skill).subscribe(() => {
        // refresh the qualifications$ observable
        this.qualifications$ = this.reqService.getQualifications();
      });
    }
  }

  deleteQualification(id: number | undefined, skillSet: string | undefined) {
    if (id) {
      this.reqService
        .handleDeleteOfQualification(id, skillSet ?? '')
        .subscribe(
          () => (this.qualifications$ = this.reqService.getQualifications())
        );
    }
  }
}
