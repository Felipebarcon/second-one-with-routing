import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailClientComponent } from './detail-client/detail-client.component';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';

const routes: Routes = [
  {
    path: 'factures', // localhost:4200/factures
    redirectTo: '/factures',
    pathMatch: 'full',
  },
  {
    path: ':id', // localhost:4200/clients
    component: DetailClientComponent,
  },
  {
    path: '', // localhost:4200
    component: ListeClientsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
