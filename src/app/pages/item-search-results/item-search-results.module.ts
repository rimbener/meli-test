import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItemResultLineComponent } from './item-result-line/item-result-line.component';
import { ItemResultListComponent } from './item-result-list/item-result-list.component';
import { ItemSearchResultsComponent } from './item-search-results.component';
import { ItemSearchResultsService } from './item-search-results.service';

const routes: Routes = [
  { path: '', component: ItemSearchResultsComponent }
];

@NgModule({
  declarations: [ItemSearchResultsComponent, ItemResultLineComponent, ItemResultListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [
    ItemSearchResultsService
  ]
})
export class ItemSearchResultsModule { }
