import {
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Platform,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { SafeAreaView } from 'react-native-safe-area-context';
import MovieList from '../../components/MovieList';
import { fallbackMoviePoster, fetchMovieDetails, fetchSimilarMovies, image500 } from '../../utils/request';
import Loading from '../../components/Loading';

interface Genre {
    name: string;
}

interface Movie {
    id: number;
    title: string;
    status: string;
    release_date: string;
    runtime: number;
    genres: Genre[];
    overview: string;
    poster_path: string | null;
}

const { width, height } = Dimensions.get('window');

export default function MovieDetails() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const router = useRouter();
    const [movie, setMovie] = useState<Movie | null>(null);
    const [similarMovies, setSimilarMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            getMovieDetails(id);
            getSimilarMovies(id);
        }
    }, [id]);

    const getMovieDetails = async (id: string) => {
        const data = await fetchMovieDetails(id);
        setMovie(data);
        setLoading(false);
    };

    const getSimilarMovies = async (id: string) => {
        const data = await fetchSimilarMovies(id);
        if (data && data.results) {
            setSimilarMovies(data.results);
        }
    };

    const handleBackPress = () => {
        if (Platform.OS === 'web') {
            if (window.history.length > 1) {
                window.history.back();
            } else {
                router.push('/MoviesScreen');
            }
        } else {
            router.back();
        }
    };

    return (
        <ScrollView
            contentContainerStyle={[
                styles.scrollView,
                Platform.OS === 'web' && styles.scrollViewWeb
            ]}
            style={styles.container}
        >
            <View style={styles.posterContainer}>
                <SafeAreaView style={styles.safeAreaView}>
                    <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                    </TouchableOpacity>
                </SafeAreaView>

                {loading ? (
                    <Loading />
                ) : (
                    <View style={[styles.posterWrapper, Platform.OS === 'web' && styles.posterWrapperWeb]}>
                        <Image
                            source={{ uri: image500(movie?.poster_path) || fallbackMoviePoster }}
                            style={[styles.moviePoster, Platform.OS === 'web' && styles.moviePosterWeb]}
                        />
                    </View>
                )}
            </View>

            <View style={styles.detailsContainer}>
                <Text style={styles.movieTitle}>{movie?.title}</Text>

                {movie?.id && (
                    <Text style={styles.movieInfo}>
                        {movie.status} - {movie.release_date?.split('-')[0] || 'N/A'} - {movie.runtime} min
                    </Text>
                )}

                <View style={styles.genresContainer}>
                    {movie?.genres?.map((genre, index) => {
                        const showDot = index + 1 !== movie.genres.length;
                        return (
                            <Text key={index} style={styles.genreText}>
                                {genre.name} {showDot ? '- ' : null}
                            </Text>
                        );
                    })}
                </View>

                <Text style={styles.description}>{movie?.overview}</Text>
            </View>

            {movie?.id && similarMovies.length > 0 && (
                <MovieList title="Similar Movies" data={similarMovies} loading={loading} />
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    scrollView: {
        paddingBottom: 20,
    },
    scrollViewWeb: {
        paddingLeft: 150,
        paddingRight: 150,
    },
    posterContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
        paddingTop: 50,
    },
    safeAreaView: {
        position: 'absolute',
        zIndex: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    backButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 50,
        padding: 8,
    },
    posterWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.7,
        height: height * 0.5,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#333',
    },
    posterWrapperWeb: {
        width: 350,
        height: 525,
    },
    moviePoster: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    moviePosterWeb: {
        width: 350,
        height: 525,
    },
    detailsContainer: {
        paddingHorizontal: 16,
        paddingTop: 16,
        marginTop: 20,
    },
    movieTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    movieInfo: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
        marginTop: 8,
    },
    genresContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 8,
    },
    genreText: {
        color: 'black',
        fontSize: 14,
    },
    description: {
        fontSize: 16,
        color: 'black',
        marginTop: 8,
        textAlign: 'center',
    },
});
