import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../services/article.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  name: string = 'Article';
  status: string = 'Statut';
  content: string = 'Content';

  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.name = this.articleService.getArticleById(+id).name;
    this.status = this.articleService.getArticleById(+id).status;
    this.content = this.articleService.getArticleById(+id).content;
  }

}
