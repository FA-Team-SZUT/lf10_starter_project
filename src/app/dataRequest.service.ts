import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataRequest {
  giveBack() {
    return 'Hello world';
  }
}
