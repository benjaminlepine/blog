import {Component, Input, OnInit} from '@angular/core';
import {ArticleService} from "../services/article.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() indexOfArticle: number;
  @Input() ArticleName: string;
  @Input() ArticleStatus: string;
  @Input() ArticleContent: string;
  @Input() id: number;
  constructor(private articleService: ArticleService, private router: Router ) { }

  ngOnInit() {
  }

  like() {
    this.articleService.like(this.indexOfArticle);
  }

  dislike() {
    this.articleService.dislike(this.indexOfArticle);
  }
}
