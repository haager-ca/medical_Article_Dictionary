import { Injectable } from '@angular/core';

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

  private articles: string[] = [];

  public getArticles(): string[] {
    return this.articles;
  }

  public setArticles(articles: string[]): void {
    this.articles = articles;
    localStorage.setItem("articles", JSON.stringify(this.articles))
  }
}
