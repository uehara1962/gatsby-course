// import React from "react"

// const Search = () => <h1>Search</h1>

// export default Search

// S>----------------------------------------------------------------------------------------<//

// import React from "react"

// import algoliasearch from "algoliasearch/lite"
// import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"

// import * as S from "./styles"

// const algolia = {
//   appId: process.env.GATSBY_ALGOLIA_APP_ID,
//   searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
//   indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
// }

// const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

// const Search = () => (
//   <S.SearchWrapper>
//     <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
//       <SearchBox autoFocus translations= />
//       <Stats />
//       <Hits />
//     </InstantSearch>
//   </S.SearchWrapper>
// )

// export default Search

// S>----------------------------------------------------------------------------------------<//

import React from "react"

import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"

import Hit from "./Hit"
import * as S from "./styles"

// console.log("process.env: ", process.env)
// console.log(
//   "process.env.GATSBY_ALGOLIA_APP_ID: ",
//   process.env.GATSBY_ALGOLIA_APP_ID
// )

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

const Search = () => (
  <S.SearchWrapper>
    <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
      <SearchBox
        // autoFocus={true}
        translations={{ placeholder: "Pesquisar..." }}
        autoFocus
      />
      <Stats
        translations={{
          stats(nbHits, timeSpentMs) {
            return `${nbHits} resultados encontrados em ${timeSpentMs}ms`
          },
        }}
      />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  </S.SearchWrapper>
)

export default Search
