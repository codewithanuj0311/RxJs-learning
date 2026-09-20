import { Injectable } from '@angular/core';
import { AsyncSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }
   msg = new Subject<string>();
   asyncVideo = new AsyncSubject<string>();
}
