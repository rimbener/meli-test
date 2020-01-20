import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemDetailService } from './item-detail.service';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from "rxjs";
import ItemByIdResponse from 'server/models/responses/item-by-id-response';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemDetailComponent implements OnInit {
  public item$ = this.itemDetailService.state$;

  constructor(private activatedRoute: ActivatedRoute, private location: Location,
    private itemDetailService: ItemDetailService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (!params || !params.id) {
        this.location.back();
      }
      this.itemDetailService.getById(params.id);
    })
  }
}
