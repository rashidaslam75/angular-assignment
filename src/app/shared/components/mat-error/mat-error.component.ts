import { Component, Input,  } from '@angular/core';
import { AbstractControl,  } from '@angular/forms';

@Component({
  selector: 'app-mat-error',
  templateUrl: './mat-error.component.html',
  styleUrls: ['./mat-error.component.css']
})
export class MatErrorComponent {
  @Input() control: AbstractControl;
}
