import React from 'react';
import Search from '../search/Search';
import Article from '../articles/Article';

export default function App() {
  return (
    <>
      <Article 
        title="Pokemon are real!" 
        url="https://placekitten.com/g/200/300" 
        image="https://placekitten.com/g/200/300" />
      <Search search="hello" onChange={() => {}} />
    </>
  );
}
