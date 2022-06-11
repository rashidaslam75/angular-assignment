import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-mat-error',
  templateUrl: './mat-error.component.html',
  styleUrls: ['./mat-error.component.css']
})
export class MatErrorComponent implements OnInit {
  @Input() control: AbstractControl;
  
  constructor() {}
  ngOnInit(): void {
  }

}
