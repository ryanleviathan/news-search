import React, { Component } from 'react';
import Search from '../components/search/Search';
import ArticleList from '../components/articles/ArticleList';

export default class NewsSearch extends Component {
  state = {
    search: '',
    articles: []
  };

  handleSearch = ({ target }) => {
    this.setState({ search: target.value });
  };

  render() {
    const { search, articles } = this.state;

    return (
      <>
        <Search search={search} />
        <ArticleList articles={articles} />
      </>
    );
  }
}
