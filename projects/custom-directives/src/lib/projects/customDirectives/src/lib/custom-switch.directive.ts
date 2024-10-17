import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomSwitch]',
  standalone: true
})
export class CustomSwitchDirective {
  private cases = new Map<string, TemplateRef<any>>();

  constructor(private viewContainer: ViewContainerRef) {}

  @Input() set appCustomSwitch(value: string) {
    this.viewContainer.clear();
    const template = this.cases.get(value);
    if (template) {
      this.viewContainer.createEmbeddedView(template);
    }
  }

  addCase(caseValue: string, templateRef: TemplateRef<any>) {
    this.cases.set(caseValue, templateRef);
  }
}

@Directive({
  selector: '[appCustomSwitchCase]',
  standalone: true
})
export class CustomSwitchCaseDirective {
  @Input() set appCustomSwitchCase(value: string) {
    this.customSwitch.addCase(value, this.templateRef);
  }

  constructor(private customSwitch: CustomSwitchDirective, private templateRef: TemplateRef<any>) {}
}