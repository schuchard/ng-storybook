import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreeComponent } from './tree/tree.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { TableComponent } from './table/table.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core.module';

const declarations = [
  NavbarComponent,
  DashboardComponent,
  TreeComponent,
  DragDropComponent,
  TableComponent,
  AddressFormComponent,
];

@NgModule({
  imports: [CommonModule, CoreModule],
  exports: [declarations],
  declarations: [declarations],
  providers: [],
})
export class CoreComponentsModule {}
