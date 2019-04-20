import {Component, Input, OnInit} from '@angular/core';
import {ArticleService} from "../services/article.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() indexOfArticle: string;
  @Input() ArticleName: string;
  @Input() ArticleStatus: string;
  @Input() ArticleContent: string;
  @Input() id: number;
  constructor(private articleService: ArticleService ) { }

  ngOnInit() {
  }

  message() {
    console.log('toto');
  }

}
