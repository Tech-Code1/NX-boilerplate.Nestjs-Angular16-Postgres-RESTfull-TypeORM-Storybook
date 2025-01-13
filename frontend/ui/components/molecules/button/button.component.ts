import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { ButtonType } from './button.interface';

@Component({
    selector: 'c-button',
    imports: [CommonModule],
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements ButtonType {
  @Input() type: ButtonType['type'] = 'button';
  @Input() disabled: ButtonType['disabled'] = false;
  @Input() css!: ButtonType['css'];
}
