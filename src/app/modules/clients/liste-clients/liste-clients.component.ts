import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import client from 'src/app/services/data/client';
import { DataService } from '../../../services/data/data.service';

@Component({
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.css'],
})
export class ListeClientsComponent implements OnInit {
  clients: client[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getClientsAll().subscribe((d) => (this.clients = d));
  }

  ShowFactures() {
    // window.location.assign("/factures") ou:
    // this.router.navigate(['/factures']); ou:
    this.router
      .navigateByUrl('/factures') // beaucoup plus rapide
      .catch((e) => this.router.navigateByUrl('/'));
  }
}
