import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { KeyAuthGuard } from './guards/key-auth.guard';

const routes: Routes = [
  {
    path: 'clients', // localhost:4200/clients
    loadChildren: () =>
      import('./modules/clients/clients.module').then((m) => m.ClientsModule),
    canLoad: [],
  },
  {
    path: 'factures', // localhost:4200/factures
    loadChildren: () =>
      import('./modules/factures/factures.module').then(
        (m) => m.FacturesModule
      ),
    canActivate: [KeyAuthGuard],
  },
  {
    path: '', // localhost:4200
    component: LandingComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
