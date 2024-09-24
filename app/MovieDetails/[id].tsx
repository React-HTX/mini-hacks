import {
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Platform,
    StyleSheet,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router'; // Expo Router navigation hooks
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';
import MovieList from '../../components/MovieList';
import { fallbackMoviePoster, fetchMovieCredits, fetchMovieDetails, fetchSimilarMovies, image500 } from '../../utils/request'; // API paths
import Loading from '../../components/Loading';

// Define interfaces for movie, genre, and cast member
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

interface CastMember {
    name: string;
    character: string;
    profile_path: string | null;
}

const ios = Platform.OS === 'ios';
const { width, height } = Dimensions.get('window');

export default function MovieDetails() {
    const { id } = useLocalSearchParams<{ id: string }>(); // Type the route params
    const router = useRouter(); // Expo Router hook to navigate back
    const [movie, setMovie] = useState<Movie | null>(null); // Type movie state
    const [cast, setCast] = useState<CastMember[]>([]); // Type cast state
    const [similarMovies, setSimilarMovies] = useState<Movie[]>([]); // Type similar movies state
    const [isFavourite, toggleFavourite] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            getMovieDetails(id);
            getMovieCredits(id);
            getSimilarMovies(id);
        }
    }, [id]);

    const getMovieDetails = async (id: string) => {
        const data = await fetchMovieDetails(id);
        setMovie(data);
        setLoading(false);
    };

    const getMovieCredits = async (id: string) => {
        const data = await fetchMovieCredits(id);
        if (data && data.cast) {
            setCast(data.cast);
        }
    };

    const getSimilarMovies = async (id: string) => {
        const data = await fetchSimilarMovies(id);
        if (data && data.results) {
            setSimilarMovies(data.results);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollView} style={styles.container}>
            {/* Back button and movie poster */}
            <View style={styles.posterContainer}>
                <SafeAreaView style={styles.safeAreaView}>
                    <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                    </TouchableOpacity>
                </SafeAreaView>

                {loading ? (
                    <Loading />
                ) : (
                    <View style={styles.posterWrapper}>
                        <Image
                            source={{ uri: image500(movie?.poster_path) || fallbackMoviePoster }}
                            style={styles.moviePoster}
                        />
                    </View>
                )}
            </View>

            {/* Movie details */}
            <View style={styles.detailsContainer}>
                {/* Title */}
                <Text style={styles.movieTitle}>{movie?.title}</Text>

                {/* Status, release year, runtime */}
                {movie?.id && (
                    <Text style={styles.movieInfo}>
                        {movie.status} • {movie.release_date?.split('-')[0] || 'N/A'} • {movie.runtime} min
                    </Text>
                )}

                {/* Genres */}
                <View style={styles.genresContainer}>
                    {movie?.genres?.map((genre, index) => {
                        const showDot = index + 1 !== movie.genres.length;
                        return (
                            <Text key={index} style={styles.genreText}>
                                {genre.name} {showDot ? '•' : null}
                            </Text>
                        );
                    })}
                </View>

                {/* Description */}
                <Text style={styles.description}>{movie?.overview}</Text>
            </View>

            {/* Similar movies section */}
            {movie?.id && similarMovies.length > 0 && (
                <MovieList title="Similar Movies" data={similarMovies} loading={loading} />
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white', // Dark background color
        flex: 1,
    },
    scrollView: {
        paddingBottom: 20,
    },
    posterContainer: {
        width: '100%',
        alignItems: 'center', // Center the poster horizontally
        marginTop: 20,
        paddingTop: 50
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        borderRadius: 50,
        padding: 8,
    },
    posterWrapper: {
        alignItems: 'center', // Center the poster
        justifyContent: 'center',
        width: width * 0.7, // Poster width 70% of the screen width
        height: height * 0.5, // Adjust height to be smaller
        borderRadius: 20, // Rounded corners
        overflow: 'hidden', // Ensure rounded corners
        backgroundColor: '#333', // Fallback background color in case the image fails to load
    },
    moviePoster: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', // Ensure the image covers the container
    },
    detailsContainer: {
        paddingHorizontal: 16,
        paddingTop: 16,
        marginTop: 20,
    },
    movieTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black', // White text color
        textAlign: 'center',
    },
    movieInfo: {
        fontSize: 16,
        color: 'black', // Light gray text for secondary info
        textAlign: 'center',
        marginTop: 8,
    },
    genresContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 8,
    },
    genreText: {
        color: 'black', // Light gray text for genres
        fontSize: 14,
    },
    description: {
        fontSize: 16,
        color: 'black', // Lighter gray for description
        marginTop: 8,
        textAlign: 'center',
    },
});

