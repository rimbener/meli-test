import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItemDetailComponent } from './item-detail.component';
import { ItemDetailService } from './item-detail.service';

const routes: Routes = [
  { path: '', component: ItemDetailComponent }
];

@NgModule({
  declarations: [ItemDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  providers: [
    ItemDetailService
  ]
})
export class ItemDetailModule { }
