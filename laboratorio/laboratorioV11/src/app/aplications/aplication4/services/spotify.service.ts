import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor(
    private http: HttpClient
  ) { }

  public getNewReleases(): Observable<any> {
    const url = `browse/new-releases`;
    return this.getQuery(url).pipe(
      map(data => data.albums.items)
    );
  }

  public getArtistas(termino: string): Observable<any> {
    const url = `search?q=${termino}&type=artist&limit=15`;
    return this.getQuery(url).pipe(
      map(data => data.artists.items)
    );
  }

  public getArtista(id: string): Observable<any> {
    const url = `artists/${id}`;
    return this.getQuery(url);
  }

  public getTopTracks(id: string): Observable<any> {
    const url = `artists/${id}/top-tracks?country=es`;
    return this.getQuery(url).pipe(map(data => data.tracks));
  }


  private getQuery(query: string): Observable<any> {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAb03MGs-F0hewL8qurlMz7PiPgp-vO9hAL7YfvOdC_dplF8BKFvepf4oKkpXJeBBBwjPMMfiKCOUUP5rQ'
    });

    return this.http.get<any>(url, { headers });
  }
}
