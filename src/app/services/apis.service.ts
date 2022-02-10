import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private httpClient: HttpClient) { }

  serverUrl = 'https://api.deezer.com/';
  searchOption = 'search/artist?q=:';

  getArtistBySearch(searchInput: string): Observable<HttpResponse<Config>> {
    return this.httpClient.get<Config>('/' +
      this.serverUrl + this.searchOption + searchInput, { observe: 'response' });
  }

  getSingleArtist(id: number): Observable<HttpResponse<Config>> {
    return this.httpClient.get<Config>('/' +
      this.serverUrl + 'artist/' + id, { observe: 'response' });
  }

  getArtistTopTracks(id: number): Observable<HttpResponse<Config>> {
    return this.httpClient.get<Config>('/' +
      this.serverUrl + 'artist/' + id + '/top', { observe: 'response' });
  }

  getArtistAlbums(id: number): Observable<HttpResponse<Config>> {
    return this.httpClient.get<Config>('/' +
      this.serverUrl + 'artist/' + id + '/albums', { observe: 'response' });
  }

  getTopArtist(): Observable<HttpResponse<Config>> {
    return this.httpClient.get<Config>('/' +
      this.serverUrl + 'chart/O/artists', { observe: 'response' });
  }

}
