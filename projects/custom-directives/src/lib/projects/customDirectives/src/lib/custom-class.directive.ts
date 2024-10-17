import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[libCustomClass]',
  standalone: true
})
export class CustomClassDirective {
  @Input() set appCustomClass(classObject: { [key: string]: boolean }) {
    for (const key in classObject) {
      if (classObject[key]) {
        this.renderer.addClass(this.el.nativeElement, key);
      } else {
        this.renderer.removeClass(this.el.nativeElement, key);
      }
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}