import React, { useState } from 'react';
import SearchInputCard from '../../features/SearchInputCard';
import DefaultView from '../../components/DefaultView';
import SearchResults from '../../components/SearchResults';

const Search = () => {
    const [results, setResults] = useState();

    return (
        <DefaultView>
            <SearchInputCard setResults={setResults} />
            <SearchResults results={results} />
        </DefaultView>
    )
}

export default Search;