import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Article } from 'src/app/classes/Article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public articleTitle: string = "Anatomie";
  public showAlert: boolean = true;
  public newArticleTitle: string = "";
  public readonly maxTitleLength: number = 20;
  public newAuthor: string = "";
  public articles: string[] = [
    "Die drei ???"
  ]


  constructor() { }

  ngOnInit(): void {
  }

  public transformArticleTitle(title: string): string {
    return "Artikel: " + title;

  }

  public addNewArticle() {
    // this.showAlert = !this.showAlert;
    this.articles.push(this.newArticleTitle)
    this.newArticleTitle = "";
  }
}
