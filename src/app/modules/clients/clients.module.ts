import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { DetailClientComponent } from './detail-client/detail-client.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListeClientsComponent, DetailClientComponent],
  imports: [CommonModule, ClientsRoutingModule, SharedModule],
})
export class ClientsModule {}
