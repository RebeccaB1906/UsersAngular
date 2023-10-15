import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'proj-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string;
  @Output() onClick = new EventEmitter<any>();

  constructor() {}

  onClickButton(event: any) {
    this.onClick.emit(event);
  }

}
