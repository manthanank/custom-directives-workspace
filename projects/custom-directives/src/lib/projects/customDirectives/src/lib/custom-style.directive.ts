import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]',
  standalone: true
})
export class CustomStyleDirective {
  @Input() set appCustomStyle(styleObject: { [key: string]: string }) {
    for (const key in styleObject) {
      this.renderer.setStyle(this.el.nativeElement, key, styleObject[key]);
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
