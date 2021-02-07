import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="danger" *ngIf="value == 'X'">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important;left:400px;position:relative}']
})
export class SquareComponent  {

  @Input() value: 'X' | 'O';

}
