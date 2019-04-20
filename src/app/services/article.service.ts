export class ArticleService {
  articles = [
    {
      id: 1,
      name: 'Mon premier post',
      status: 'unlike',
      content: 'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod et dolore magna aliqua. ' +
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
      'Duis aute irure dolor in nulla pariatur. '
    },
    {
      id: 2,
      name: 'Mon deuxième post',
      status: 'unlike',
      content: 'Ipsum dolor sed do eiusmod et dolore magna aliqua. ' +
      'Ut enim ad minim veniam, nostrud exercitation ullamco laboris nisi ut aliquip ex ea consequat. ' +
      'Duis aute irure dolor in reprehenderit in  eu fugiat nulla pariatur. '
    },
    {
      id: 3,
      name: 'Encore un post',
      status: 'unlike',
      content: 'Sed do eiusmod et dolore magna aliqua. ' +
      'Ut enim ad minim veniam, quis consequat. ' +
      'Duis aute esse cillum dolore eu fugiat nulla pariatur. '
    },

  ];

  like(indexOfArticle: number) {
    this.articles[indexOfArticle].status = 'like';
  }

  dislike(indexOfArticle: number) {
    this.articles[indexOfArticle].status = 'dislike';
  }

}
