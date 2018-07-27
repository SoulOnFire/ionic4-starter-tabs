import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import {map, tap, startWith, finalize} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RssService {
  constructor(private _http: Http) {
  }

  public getRSS(url: string) {
    const params: URLSearchParams = new URLSearchParams();
    params.set('api_key', 'zlj2bgp9vhy0mifgdo1tepzlknjvgu4tdnuyqilm');
    params.set('rss_url', url);
    return this._http
    .get('https://api.rss2json.com/v1/api.json', { search: params })
    .pipe(
    map(res => <Feed>res.json()),
    map(feed => {
      if (feed.status === 'ok') {
        return feed.items;
      }
    }),
    tap(items => {
      items.forEach(item => {
        item.title = item.title.replace(/&[a-z]+;([a-z]+;)*/g, '');
        item.content = item.content.replace(/<a[^>]*>|<\/a>/g, '');
      });
    }),
    tap(items => localStorage.setItem(url, JSON.stringify(items))),
    startWith(JSON.parse(localStorage.getItem(url)) || []),
  );
  }
}

export interface FeedSource {
  url?: string;
  title?: string;
  link?: string;
  author?: string;
  description?: string;
  image?: string;
}

export interface Enclosure {
  link?: string;
  type?: string;
}

export interface FeedItem {
  title?: string;
  pubDate?: string;
  link?: string;
  guid?: string;
  author?: string;
  thumbnail?: string;
  description?: string;
  content?: string;
  enclosure?: Enclosure;
  categories?: any[];
}

export interface Feed {
  status?: string;
  feed?: FeedSource;
  items?: FeedItem[];
}
