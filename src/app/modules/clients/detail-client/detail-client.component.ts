import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import client from 'src/app/services/data/client';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css'],
})
export class DetailClientComponent implements OnInit {
  id: string | null = null;
  client?: client;
  constructor(private route: ActivatedRoute, private data: DataService) {
    this.id = route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    if (this.id) {
      this.data
        .getClientById(Number(this.id))
        .subscribe((c: any) => (this.client = c));
    }
  }
}
