import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarCompComponent } from './search-bar-comp/search-bar-comp.component';
import { TableCompComponent } from './table-comp/table-comp.component';

@NgModule({
  declarations: [SearchBarCompComponent, TableCompComponent],
  imports: [
    CommonModule
  ],
  exports:[SearchBarCompComponent, TableCompComponent]
})
export class CommonComponenetsModule { }
