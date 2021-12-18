import { Injectable } from '@angular/core';
import { Article } from '../_classes/article';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
    this.articles = JSON.parse(localStorage.getItem("articles") || "[]");
    if (!this.articles) {
      this.articles = [];
    }
  }

  private articles: Article[] = [];

  public getArticles(): Article[] {
    return this.articles;
  }

  public setArticles(articles: Article[]): void {
    this.articles = articles;
    localStorage.setItem("articles", JSON.stringify(this.articles))
  }
}
