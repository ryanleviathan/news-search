import React from 'react';
import PropTypes from 'prop-types';

const ArticleList = () => ();

ArticleList.PropTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }))
};

export default ArticleList;
