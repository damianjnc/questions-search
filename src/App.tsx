import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  Configure,
  Highlight,
  Hits,
  InstantSearch,
  Pagination,
  SearchBox,
} from 'react-instantsearch';

import { Panel } from './Panel';

import type { Hit } from 'instantsearch.js';

import './App.css';

const searchClient = algoliasearch(
  '3AUPC2W6SH',
  '8ef78ccda10d93c996223edbaf83c8e6'
);

const future = { preserveSharedStateOnUnmount: true };

export function App() {
  console.log('App23');

  return (
    <div>
      <header className="header">
        <h1 className="header-title">
          <a href="/">instantsearch-app</a>
        </h1>
        <p className="header-subtitle">
          using{' '}
          <a href="https://github.com/algolia/instantsearch/tree/master/packages/react-instantsearch">
            React InstantSearch
          </a>
        </p>
      </header>

      <div className="container">
        <InstantSearch
          searchClient={searchClient}
          indexName="data"
          future={future}
        >
          <Configure hitsPerPage={8} />
          <div className="search-panel">
            <div className="search-panel__filters"></div>

            <div className="search-panel__results">
              <SearchBox placeholder="" className="searchbox" />
              <Hits hitComponent={Hit} />

              <div className="pagination">
                <Pagination />
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    </div>
  );
}

type HitProps = {
  hit: Hit;
};

function Hit({ hit }: HitProps) {
  return (
    <article>
      <div>
        <h1>
          <Highlight attribute="question" hit={hit} />
        </h1>
        <p>
          <Highlight attribute="details" hit={hit} />
        </p>
        <p>
          <Highlight attribute="tags" hit={hit} />
        </p>
      </div>
    </article>
  );
}
