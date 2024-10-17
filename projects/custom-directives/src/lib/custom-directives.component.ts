import { Component } from '@angular/core';
import { CustomClassDirective } from './projects/customDirectives/src/lib/custom-class.directive';
import { CustomForDirective } from './projects/customDirectives/src/lib/custom-for.directive';
import { CustomIfDirective } from './projects/customDirectives/src/lib/custom-if.directive';
import { CustomModelDirective } from './projects/customDirectives/src/lib/custom-model.directive';
import { CustomStyleDirective } from './projects/customDirectives/src/lib/custom-style.directive';
import { CustomSwitchDirective, CustomSwitchCaseDirective } from './projects/customDirectives/src/lib/custom-switch.directive';

@Component({
  selector: 'lib-customDirectives',
  standalone: true,
  imports: [
    CustomIfDirective,
    CustomForDirective,
    CustomSwitchDirective,
    CustomSwitchCaseDirective,
    CustomClassDirective,
    CustomStyleDirective,
    CustomModelDirective
  ],
  template: `
    <p>
      custom-directives works!
    </p>
  `,
  styles: ``
})
export class CustomDirectivesComponent {

}
