import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchBoxService } from 'src/app/components/search-box/search-box.service';
import { ItemSearchResultsService } from './item-search-results.service';

@Component({
  selector: 'app-item-search-results',
  templateUrl: './item-search-results.component.html',
  styleUrls: ['./item-search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemSearchResultsComponent implements OnInit {
  public items$ = this.itemSearchResultsService.state$;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private itemSearchResultsService: ItemSearchResultsService, private searchBoxService: SearchBoxService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      if (!queryParams.search) {
        this.router.navigateByUrl('/');
      }
      this.searchBoxService.setState(queryParams.search);
      this.itemSearchResultsService.search(queryParams.search);
    })
  }
}
