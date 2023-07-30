import { Component ,OnInit ,ElementRef, ViewChild} from '@angular/core';
import { DataService } from '../data.service';
import { DemoTableRow } from 'src/DemoTableRow';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  inputFields: DemoTableRow[] = [];

  @ViewChild('inputField') inputField!: ElementRef;

  constructor(private dataService: DataService) {}

  addInput() {
    this.inputFields.push({value:''});
    setTimeout(() => {
      this.inputField.nativeElement.focus();
    });
  }

  submitValues() {
    for (const inputValue of this.inputFields){
      if (inputValue.value != '')
      {
      this.dataService.setValues(inputValue);
      }
    }
    this.inputFields = [];
  }
}
