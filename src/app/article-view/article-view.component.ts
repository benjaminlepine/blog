import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {
  articles: any[];
  constructor( private articleService: ArticleService) { }

  ngOnInit() {
    this.articles = this.articleService.articles;
  }

}
