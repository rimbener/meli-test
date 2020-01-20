import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBoxService } from './search-box.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBoxComponent implements AfterViewInit {
  @ViewChild('searchInput', { static: false }) searchInput: ElementRef;
  searchTerm$ = this.searchBoxService.state$;

  constructor(private router: Router, private searchBoxService: SearchBoxService) { }

  public onSubmit(searchTerm: string) {
    if (searchTerm) {
      this.router.navigateByUrl(`items?search=${searchTerm}`);
    }
  }

  ngAfterViewInit() {
    this.searchInput.nativeElement.focus();
  }
}
