import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { TreeComponent } from './core/tree/tree.component';
import { DragDropComponent } from './core/drag-drop/drag-drop.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'tree',
    component: TreeComponent,
  },
  {
    path: 'drag-drop',
    component: DragDropComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
