import { Injectable } from '@angular/core';
import { filter, map, Observable, of } from 'rxjs';
import client from './client';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public getClientById(id: number): Observable<client | undefined> {
    return this.getClientsAll().pipe(
      map((results) => results.find((c) => c.id == id))
    );
  }

  constructor() {}

  public getClientsAll(): Observable<client[]> {
    return of([
      { id: 1, nom: 'paul' },
      { id: 2, nom: 'pierre' },
      { id: 3, nom: 'claude' },
      { id: 4, nom: 'mauris' },
      { id: 5, nom: 'felipe' },
      { id: 6, nom: 'anne' },
      { id: 7, nom: 'michel' },
      { id: 8, nom: 'toto' },
      { id: 9, nom: 'yann' },
      { id: 10, nom: 'poutine' },
    ]);
  }
}
