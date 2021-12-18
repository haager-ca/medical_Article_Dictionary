import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Article } from 'src/app/_classes/article';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private storageService: StorageService) { }

  public articleTitle: string = "Anatomie";
  public showAlert: boolean = true;
  public newArticleTitle: string = "";
  public newArticleAuthor: string = "";
  public readonly maxTitleLength: number = 20;
  public articles: Article[] = [];


  ngOnInit(): void {
    this.articles = this.storageService.getArticles();
  }

  public transformArticleTitle(title: string): string {
    return "Artikel: " + title;

  }

  public addNewArticle() {
    // this.showAlert = !this.showAlert;
    const article = new Article();
    article.title = this.newArticleTitle;
    article.authors = this.newArticleAuthor ? [this.newArticleAuthor] : [];
    this.articles.push(article);
    this.storageService.setArticles(this.articles);
    this.newArticleTitle = "";
    this.newArticleAuthor = "";
  }

  public deleteArticle(article: Article) {
    console.log(article)
    this.articles = this.articles.filter(function (a) {
      if (a.title == article.title) {
        return false;
      } else {
        return true;
      }
    });
  }

}
