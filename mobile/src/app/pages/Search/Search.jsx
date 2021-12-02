import React from 'react';
import SearchInputCard from '../../features/SearchInputCard';
import DefaultView from '../../components/DefaultView';
import SearchResults from '../../components/SearchResults';

const Search = () => {
    return (
        <DefaultView>
            <SearchInputCard />
            <SearchResults />
        </DefaultView>
    )
}

export default Search;