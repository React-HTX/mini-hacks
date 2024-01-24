import SearchResults from '@/app/components/searchResults';
import { getMovies } from '@/app/utils/requests';
import React from 'react'

async function SearchPage({ searchParams }) {
    const searchText = searchParams.query;
    const movies = await getMovies(searchText);

    return (
        <SearchResults searchText={searchText} movies={movies}></SearchResults>
    )
}

export default SearchPage