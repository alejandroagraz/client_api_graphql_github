import { Component, OnInit, Input} from '@angular/core';
import {ArticleService} from "../../services/articles.service";
import {Router} from "@angular/router";
import { Article } from '../../models/article';
import {Observable} from "rxjs";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  providers: [ArticleService]
})
export class ArticlesComponent implements OnInit {

  @Input() articles: any;

  public articleDto: Article;
  public response: [];

  constructor(private _articleService: ArticleService, private router: Router){
    this.articles = [];
    this.response = [];
    this.articleDto = new Article('', '', '');
  }

  ngOnInit() {
  }

  onSubmit() {
    this.getArticles(this.articleDto.topic, this.articleDto.start, this.articleDto.first)
  }

  getArticles(topic: string, start: string, first: string) {
    this._articleService.getArticles(topic, start, first).subscribe(async (resp:any) => {
        if (resp) {
          this.response = resp;
          if (this.response) {
            this.articles = this.response
          }
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  newTab(url: string){
    window.open(url, "_blank");
  }
}
