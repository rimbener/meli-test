import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ItemByIdResponse from 'server/models/responses/item-by-id-response';
import { MY_ITEMS_API_URL } from 'src/app/consts/api-url';
import { Store } from 'src/app/shared/store';

@Injectable()
export class ItemDetailService extends Store<ItemByIdResponse>{

  constructor(private http: HttpClient, private location: Location) {
    super();
  }

  public getById(id: string) {
    this.setState(undefined);
    return this.http.get<ItemByIdResponse>(`${MY_ITEMS_API_URL}/${id}`).subscribe(
      response => this.setState(response),
      err => {
        alert(`Artículo ${id} no encontrado`);
        this.location.back();
        return err;
      });
  }
}
