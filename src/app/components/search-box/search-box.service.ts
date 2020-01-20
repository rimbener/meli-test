import { Injectable } from '@angular/core';
import { Store } from 'src/app/shared/store';

@Injectable({
  providedIn: 'root'
})
export class SearchBoxService extends Store<string>{
  constructor() {
    super('');
  }
}
