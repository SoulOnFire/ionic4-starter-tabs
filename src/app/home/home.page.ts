import { Component } from '@angular/core';
import { RssService, FeedItem } from '../components/rss.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  news: Observable<FeedItem>;
  constructor(rss: RssService) {
    // this.news = rss.getRSS('https://www.noticiasaominuto.com/rss/desporto');
    this.news = rss.getRSS('http://portal-chsj.min-saude.pt/pages/13.rss');
  }
}
