import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeamCounter } from '../../counter-dashboard/models/counter.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CounterTableService {

  constructor(private http: HttpClient) { }

  getAlTeamsCounters() : Observable<TeamCounter[]> {
    return this.http.get<TeamCounter[]>(`${environment.apiURL}/api/v1/counter/teams`);
  }

}