import { Component ,OnInit ,ElementRef, ViewChild} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  inputFields: string[] = [];

  @ViewChild('inputField') inputField!: ElementRef;

  constructor(private dataService: DataService) {}

  addInput() {
    this.inputFields.push('');
    setTimeout(() => {
      this.inputField.nativeElement.focus();
    });
  }

  submitValues() {
    const nonEmptyFields = this.inputFields.filter((field) => field.trim() !== '');
    this.dataService.setValues(nonEmptyFields);
  }
}
