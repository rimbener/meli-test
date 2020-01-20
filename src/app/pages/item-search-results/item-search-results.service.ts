import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ItemSearchResponse from 'server/models/responses/item-search-response';
import { MY_ITEMS_API_URL } from 'src/app/consts/api-url';
import { Store } from 'src/app/shared/store';

@Injectable()
export class ItemSearchResultsService extends Store<ItemSearchResponse[]>{

  constructor(private http: HttpClient) {
    super([]);
  }

  public search(searchTerm: string) {
    this.setState([]);
    this.http.get<ItemSearchResponse[]>(`${MY_ITEMS_API_URL}?search=${searchTerm}&limit=4`).subscribe(response => {
      this.setState(response);
    })
  }
}
