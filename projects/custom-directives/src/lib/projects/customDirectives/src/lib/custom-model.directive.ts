import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appCustomModel]',
  standalone: true
})
export class CustomModelDirective {
  @Input() appCustomModel: any;
  @Output() appCustomModelChange = new EventEmitter<any>();

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event.target.value'])
  onInputChange(value: any) {
    this.appCustomModelChange.emit(value);
  }

  ngOnChanges() {
    this.el.nativeElement.value = this.appCustomModel;
  }
}