import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomFor]',
  standalone: true
})
export class CustomForDirective {
  @Input() set appCustomForOf(collection: any[]) {
    this.viewContainer.clear();
    collection.forEach((item, index) => {
      this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: item, index });
    });
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}
}
