import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import Item from 'server/models/item';

@Component({
  selector: 'app-item-result-line',
  templateUrl: './item-result-line.component.html',
  styleUrls: ['./item-result-line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemResultLineComponent {
  @Input() item: Item;

  constructor(private router: Router) { }

  public itemClick(id: string) {
    this.router.navigateByUrl(`/items/${id}`);
  }
}
