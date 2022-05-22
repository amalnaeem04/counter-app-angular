import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CounterModalService {

  constructor(private http: HttpClient) { }

  createCounter(body: any) {
    return this.http.post(`${environment.apiURL}/api/v1/counter`, body);
  }

}