import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFacturesComponent } from './list-factures/list-factures.component';

const routes: Routes = [
  {
    path: '', // localhost:4200
    component: ListFacturesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacturesRoutingModule {}
