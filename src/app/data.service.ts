import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private valuesSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  private values: string[] = [];

  constructor() { }

  setValues(values: string[]) {
    this.values = values;
    this.valuesSubject.next(this.values);
  }

  getValues(): Observable<string[]> {
    return this.valuesSubject.asObservable();
  }
}
