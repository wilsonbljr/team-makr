import React from 'react';
import DefaultView from '../../components/DefaultView';
import SearchResults from '../../components/SearchResults';
import SearchInputCard from '../../features/SearchInputCard';

const Search = () => {
    return (
        <DefaultView>
            <SearchInputCard />
            <SearchResults />
        </DefaultView>
    )
}

export default Search;