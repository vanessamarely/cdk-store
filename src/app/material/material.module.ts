import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    DragDropModule,
    MatListModule,
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    DragDropModule,
    MatListModule,
  ],
})
export class MaterialModule { }
