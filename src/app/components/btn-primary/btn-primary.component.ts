import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

type BtnVariants = "primary" | "secondary"

@Component({
  selector: 'app-btn-primary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.css'
})
export class BtnPrimaryComponent {
  @Input("btn-text") btnText!: string;
  @Output("submit") onsubmit = new EventEmitter()
  @Input() loading: boolean = false;
  @Input() variant: BtnVariants = "primary"
  @Input() disabled: boolean = false;

  submit(){
    this.onsubmit.emit()
  }
}
