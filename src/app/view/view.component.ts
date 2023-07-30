import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { DemoTableRow } from 'src/DemoTableRow';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  values: DemoTableRow[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getValues().subscribe((values) => {
      this.values = values;
    });
  }
}
