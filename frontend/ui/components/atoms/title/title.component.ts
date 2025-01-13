import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { TitleType } from './title.interface';

@Component({
    selector: 'c-title',
    imports: [CommonModule],
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent implements TitleType {
  @Input() css!: TitleType['css'];

  @Input() color!: TitleType['color'];
}
