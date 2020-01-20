import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import Item from 'server/models/item';

@Component({
  selector: 'app-item-result-list',
  templateUrl: './item-result-list.component.html',
  styleUrls: ['./item-result-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemResultListComponent {
  @Input() items: Item[];
}
