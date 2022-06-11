import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatErrorComponent } from './components/mat-error/mat-error.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { UserGridComponent } from './skeleton/user-grid/user-grid.component';

@NgModule({
  declarations: [
    MatErrorComponent,
    UserGridComponent
  ],
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule
  ],
  exports: [
    MatErrorComponent,
    UserGridComponent
  ]
})
export class SharedModule { }
