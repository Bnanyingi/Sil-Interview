import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Artist {
  id: number,
  firstName: string;
  lastName: string;
  image: string;
  albums: Album[];
}

export interface Album {
  id: number,
  name: string;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(
    private http: HttpClient
  ) { }

  getArtist(id: number): Observable<Artist>{
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    return this.http.get<Artist>(`${environment.backendUrl}/artists/${id}`, { headers });
  }

  getArtists(): Observable<Artist[]>{
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    return this.http.get<Artist[]>(`${environment.backendUrl}/artists`, { headers });
  }
}
