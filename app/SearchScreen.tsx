import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    TouchableWithoutFeedback,
    Dimensions,
    StyleSheet,
} from 'react-native';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XMarkIcon } from 'react-native-heroicons/outline';
import { fallbackMoviePoster, image185, searchMovies } from '../utils/request';

import Loading from '../components/Loading';

interface Movie {
    id: number;
    poster_path: string;
    title: string;
    [key: string]: any;
}


const { width, height } = Dimensions.get('window');

export default function SearchScreen() {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<Movie[]>([]);

    const handleSearch = (search: string) => {
        if (search && search.length > 2) {
            setLoading(true);
            searchMovies({
                query: search,
                include_adult: false,
                language: 'en-US',
                page: '1',
            }).then((data) => {
                console.log('got search results');
                setLoading(false);
                if (data && data.results) setResults(data.results);
            });
        } else {
            setLoading(false);
            setResults([]);
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>

            <View style={styles.searchContainer}>
                <TextInput
                    onChangeText={handleSearch}
                    placeholder="Search Movie"
                    placeholderTextColor={'lightgray'}
                    style={styles.searchInput}
                />
                <TouchableOpacity style={styles.closeButton}>
                    <Link replace href={'/MoviesScreen'}>
                        <XMarkIcon size="25" color="white" />
                    </Link>
                </TouchableOpacity>
            </View>


            {loading ? (
                <Loading />
            ) : results.length > 0 ? (
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollViewContent}
                >
                    <Text style={styles.resultsText}>Results ({results.length})</Text>
                    <View style={styles.resultsContainer}>
                        {results.map((item: Movie, index: number) => (
                            <TouchableWithoutFeedback>
                                <Link
                                    href={{
                                        pathname: '/MovieDetails/[id]',
                                        params: { id: item.id },
                                    }}
                                >
                                    <View style={styles.resultItem}>
                                        <Image
                                            source={{ uri: image185(item.poster_path) || fallbackMoviePoster }}
                                            style={[styles.moviePoster, { width: width * 0.44, height: height * 0.3 }]}
                                        />
                                        <Text style={styles.movieTitle}>
                                            {item.title.length > 22 ? item.title.slice(0, 22) + '...' : item.title}
                                        </Text>
                                    </View>
                                </Link>
                            </TouchableWithoutFeedback>
                        ))}
                    </View>
                </ScrollView>
            ) : (
                <View style={styles.noResultsContainer}>
                    <Text style={styles.resultsText}>No Results</Text>
                </View>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 50,
        marginHorizontal: 16,
        marginBottom: 12,
        paddingVertical: 4,
        marginTop: 10,
    },
    searchInput: {
        flex: 1,
        paddingVertical: 6,
        paddingHorizontal: 16,
        fontSize: 16,
        color: 'black',
        fontWeight: '600',
    },
    closeButton: {
        backgroundColor: 'black',
        borderRadius: 50,
        padding: 8,
        marginRight: 8,
    },
    scrollViewContent: {
        paddingHorizontal: 16,
    },
    resultsText: {
        color: 'black',
        fontWeight: '600',
        marginLeft: 4,
        marginBottom: 8,
    },
    resultsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    resultItem: {
        marginBottom: 16,
    },
    moviePoster: {
        borderRadius: 20,
    },
    movieTitle: {
        color: 'black',
        marginTop: 4,
        marginLeft: 4,
        fontSize: 12,
    },
    noResultsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
