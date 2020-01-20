import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'items', loadChildren: () => import('./pages/item-search-results/item-search-results.module').then(m => m.ItemSearchResultsModule) },
  { path: 'items/:id', loadChildren: () => import('./pages/item-detail/item-detail.module').then(m => m.ItemDetailModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
