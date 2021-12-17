import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Article } from 'src/app/classes/Article';
import { StorageService } from 'src/app/services/storage.service';

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
  public readonly maxTitleLength: number = 20;
  public newAuthor: string = "";
  public articles: string[] = [];


  ngOnInit(): void {
    this.articles = this.storageService.getArticles();
  }

  public transformArticleTitle(title: string): string {
    return "Artikel: " + title;

  }

  public addNewArticle() {
    // this.showAlert = !this.showAlert;
    this.articles.push(this.newArticleTitle);
    this.storageService.setArticles(this.articles);
    this.newArticleTitle = "";
  }
}
