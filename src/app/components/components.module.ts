import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './filters/filters.component';
import { ButtonsComponent } from './buttons/buttons.component';
@NgModule({
  declarations: [FiltersComponent, ButtonsComponent],
  imports: [
    CommonModule
  ],
  exports: [FiltersComponent, ButtonsComponent]
})
export class ComponentsModule { }
