import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
  forwardRef,
} from '@angular/core';
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { ErrorInputComponent } from '../../atoms/error-input/error-input.component';
import { ControlValueAccesorDirective } from '../../shared/directives/control-value-accesor.directive';
import { InputType } from './input.interface';

@Component({
    selector: 'c-input',
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ErrorInputComponent,
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true,
        },
    ],
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent<T>
  extends ControlValueAccesorDirective<T>
  implements InputType
{
  @Input() id = '';
  @Input() css: InputType['css'] = 'input-primary';
  @Input() placeholder?: string | undefined;
  @Input() value?: string | number | undefined;
  @Input() customErrorMessages: Record<string, string> = {};
  @Input() name!: string;
  @Input()
  set disabled(value: boolean) {
    this.setDisabledState(value);
  }
}
