import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { DetailClientComponent } from './detail-client/detail-client.component';

@NgModule({
  declarations: [ListeClientsComponent, DetailClientComponent],
  imports: [CommonModule, ClientsRoutingModule],
})
export class ClientsModule {}
