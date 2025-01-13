import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { DefaultErrorMessages } from './error-input.interface';
@Component({
    selector: 'c-error-input',
    imports: [CommonModule],
    templateUrl: './error-input.component.html',
    styleUrls: ['./error-input.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class ErrorInputComponent {
  @Input() public controlName?: string;
  @Input() public formContained!: AbstractControl;

  private get currentControl(): AbstractControl | null {
    if (this.formContained && this.controlName) {
      return this.formContained instanceof FormGroup
        ? this.formContained.get(this.controlName)
        : this.formContained;
    }
    return null;
  }

  protected get error(): string {
    const errorMessage = this.currentControl?.errors
      ? this.getErrorMessage(this.currentControl?.errors)
      : '';
    return errorMessage;
  }

  private getErrorMessage(errors: Record<string, any>): string {
    const [errorName] = Object.keys(errors);
    const errorFunction = DefaultErrorMessages[errorName];
    if (errorFunction) {
      return errorFunction(errors[errorName]);
    } else {
      return 'An error occurred';
    }
  }
}
