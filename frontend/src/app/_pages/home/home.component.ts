import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/app/_classes/article';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private storageService: StorageService, private formBuilder: FormBuilder) { }

  public articleTitle: string = "Anatomie";
  public showAlert: boolean = true;
  public newArticleTitle: string = "";
  public newArticleAuthor: string = "";
  public isEditing: number = 0;
  public readonly maxTitleLength: number = 20;
  public articles: Article[] = [];
  public newArticleForm: FormGroup | undefined;


  ngOnInit(): void {
    this.articles = this.storageService.getArticles();
    this.newArticleForm = this.formBuilder.group({
      title: new FormControl("", [Validators.required, Validators.minLength(4)]),
      author: new FormControl("", [Validators.required, Validators.minLength(4)])
    })
  }

  public transformArticleTitle(title: string): string {
    return "Artikel: " + title;

  }

  public addNewArticle() {
    if (this.isEditing) {
      // Speicher die Änderungen
      const that = this;
      this.articles = this.articles.map(function (a) {
        if (a.id == that.isEditing) {
          a.title = that.newArticleTitle;
          a.authors = that.newArticleAuthor.split(", ")
        }
        return a;
      });
    } else {    
      // erstell neues Buch
      const article = new Article();
      article.title = this.newArticleTitle;
      article.id = Math.round(Math.random()*1000000);
      article.authors = this.newArticleAuthor.split(", ");
      article.publishDate = new Date;
      this.articles.push(article);
    }
    this.newArticleTitle = "";
    this.newArticleAuthor = "";
    this.isEditing = 0;
    this.storageService.setArticles(this.articles);

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
    this.storageService.setArticles(this.articles);
  }

  public editArticle(article: Article) {
    this.isEditing = article.id;
    this.newArticleTitle = article.title;
    this.newArticleAuthor = article.authors.join(", ");
  }
}
