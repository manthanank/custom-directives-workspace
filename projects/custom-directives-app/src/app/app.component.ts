import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomClassDirective } from '../../../custom-directives/src/lib/projects/customDirectives/src/lib/custom-class.directive';
import { CustomIfDirective } from '../../../custom-directives/src/lib/projects/customDirectives/src/lib/custom-if.directive';
import { CustomStyleDirective } from '../../../custom-directives/src/lib/projects/customDirectives/src/lib/custom-style.directive';
import { CustomForDirective } from '../../../custom-directives/src/lib/projects/customDirectives/src/lib/custom-for.directive';
import { CustomModelDirective } from '../../../custom-directives/src/lib/projects/customDirectives/src/lib/custom-model.directive';
import { CustomSwitchDirective, CustomSwitchCaseDirective } from '../../../custom-directives/src/lib/projects/customDirectives/src/lib/custom-switch.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CustomIfDirective,
    CustomForDirective,
    CustomSwitchDirective,
    CustomSwitchCaseDirective,
    CustomClassDirective,
    CustomStyleDirective,
    CustomModelDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isVisible = true;
  items = ['Item 1', 'Item 2', 'Item 3'];
  currentView = 'view1';
  isActive = true;
  textColor = 'blue';
  fontSize = '20px';
  userInput = 'Type something...';

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  toggleView() {
    this.currentView = this.currentView === 'view1' ? 'view2' : 'view1';
  }

  toggleClass() {
    this.isActive = !this.isActive;
  }

  changeStyle() {
    this.textColor = this.textColor === 'blue' ? 'red' : 'blue';
    this.fontSize = this.fontSize === '20px' ? '25px' : '20px';
  }
}