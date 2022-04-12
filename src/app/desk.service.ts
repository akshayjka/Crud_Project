import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeskService {

  subject = new Subject()
  subject2  = new Subject()

  constructor() { }
}
