import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const enum endpoint {
  latest = '/movie/latest',
  now_playing = '/movie/now_playing',
  top_rated = '/movie/top_rated',
  upcoming = '/movie/upcoming',
  trending = '/trending/all/week',
  originals = '/discover/tv',
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private URL = 'http://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}
}
