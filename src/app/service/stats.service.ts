import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) {}

  getStats() {

  	let headers = new HttpHeaders();
  	headers.append('Content-Type', 'application/json');
  	headers.append('User-Agent', 'GMerge/0.1');
  	headers.append('Host', 'api.jumpstartsol.com');
  	headers.append('Connection', 'keep-alive');
  	headers.append('Access-Control-Allow-Origin', '*');


  	let url = "http://localhost:8000/api/stats";
  	return this.http.get(url, {headers: headers});

  }
}
