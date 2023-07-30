import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DemoTableRow } from 'src/DemoTableRow';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private values: DemoTableRow[] = [];
  private valuesSubject: BehaviorSubject<DemoTableRow[]> = new BehaviorSubject<DemoTableRow[]>(this.values);

  constructor() { }

  setValues(value: DemoTableRow) {
    this.values.push(value);
    this.valuesSubject.next([...this.values]);
  }

  getValues(): Observable<DemoTableRow[]> {
    return this.valuesSubject.asObservable();
  }
}
