import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatInputModule,
    Material.MatButtonModule,

  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatInputModule,
    Material.MatButtonModule,
  ]
})
export class MaterialModule { }
