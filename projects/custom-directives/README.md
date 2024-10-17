# Custom Directives Library

This is a library of custom Angular directives that mimic common built-in Angular directives such as `NgIf`, `NgFor`, `NgClass`, etc.

## Installation

Install via npm:

```bash
npm install @manthanankolekar/custom-directives
```

## Usage

Import in your `app.component.ts`:

```typescript
import { Component } from '@angular/core';

import { CustomIfDirective, CustomForDirective, CustomSwitchDirective, CustomSwitchCaseDirective, CustomClassDirective, CustomStyleDirective, CustomModelDirective } from '@manthanankolekar/custom-directives';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CustomIfDirective,
    CustomForDirective,
    CustomSwitchDirective,
    CustomSwitchCaseDirective,
    CustomClassDirective,
    CustomStyleDirective,
    CustomModelDirective,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-directives';
}
```

## Directives

### CustomIfDirective

The `CustomIfDirective` is a structural directive that conditionally includes a template based on the value of an expression.

```html
<p *appCustomIf="isVisible">This is conditionally visible based on isVisible.</p>
```

### CustomForDirective

The `CustomForDirective` is a structural directive that repeats a template for each item in a collection.

```html
<ul>
    <li *appCustomFor="let item of items; index as i">Index: {{ i }} - Item: {{ item }}</li>
</ul>
```

### CustomSwitchDirective

The `CustomSwitchDirective` is a structural directive that conditionally includes a template based on the value of an expression.

```html
<div [appCustomSwitch]="currentView">
    <ng-template appCustomSwitchCase="view1">View 1 Content</ng-template>
    <ng-template appCustomSwitchCase="view2">View 2 Content</ng-template>
</div>
```

### CustomStyleDirective

The `CustomStyleDirective` is an attribute directive that adds styles to an element.

```html
<div [appCustomClass]="{ 'active': isActive, 'hidden': !isActive }">
    This element has dynamic classes.
</div>
```

### CustomClassDirective

The `CustomClassDirective` is an attribute directive that adds classes to an element.

```html
<div [appCustomStyle]="{ 'color': textColor, 'font-size': fontSize }">
    This element has dynamic styles.
</div>
```

### CustomModelDirective

The `CustomModelDirective` is a two-way binding directive that binds a property to an input element.

```html
<input [appCustomModel]="userInput" (appCustomModelChange)="userInput = $event">
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
