import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFacturesComponent } from './list-factures/list-factures.component';
import { FacturesRoutingModule } from './factures-routing.module';

@NgModule({
  declarations: [ListFacturesComponent],
  imports: [CommonModule, FacturesRoutingModule],
})
export class FacturesModule {}
