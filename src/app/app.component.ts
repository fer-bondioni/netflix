import {
  ElementRef,
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Movies } from './models/movies';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  sticky = false;
  subs: Subscription[] = [];
  trending: Movies;
  popular: Movies;
  topRated: Movies;
  originals: Movies;
  nowPlaying: Movies;

  sliderConfig = {
    slidesToShow: 9,
    slidesToScroll: 2,
    arrows: true,
    autoplay: false,
  };

  @ViewChild('stickyHeader') header: ElementRef;

  constructor(private movie: MovieService) {}

  ngOnInit(): void {
    this.subs.push(
      this.movie.getTrending().subscribe((data) => (this.trending = data))
    );
    this.subs.push(
      this.movie.getPopular().subscribe((data) => (this.popular = data))
    );
    this.subs.push(
      this.movie.getTopRated().subscribe((data) => (this.topRated = data))
    );
    this.subs.push(
      this.movie.getOriginals().subscribe((data) => (this.originals = data))
    );
    this.subs.push(
      this.movie.getNowPlaying().subscribe((data) => (this.nowPlaying = data))
    );
  }
  ngOnDestroy(): void {
    this.subs.map((s) => s.unsubscribe());
  }
}
