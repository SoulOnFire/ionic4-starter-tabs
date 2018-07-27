import { Component } from '@angular/core';
import { RssService, FeedItem } from '../components/rss.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage {
  agenda: Observable<FeedItem>;
  constructor(rss: RssService) {
    // this.news = rss.getRSS('https://www.noticiasaominuto.com/rss/desporto');
    this.agenda = rss.getRSS('http://portal-chsj.min-saude.pt/pages/14.rss');
  }

}
