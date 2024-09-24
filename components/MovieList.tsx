import { Link } from 'expo-router';
import React from 'react';
import {
    View,
    FlatList,
    Text,
    Image,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';

interface Movie {
    id: number;
    title: string;
    poster_path: string | null;
}

interface MovieListProps {
    title: string;
    data: Movie[];
    loading: boolean;
}

const fallbackPoster = 'https://via.placeholder.com/100x150.png?text=No+Image'; // Fallback image

const MovieList: React.FC<MovieListProps> = ({ title, data, loading }) => {
    const renderMovieItem = ({ item }: { item: Movie }) => (
        <TouchableOpacity style={styles.movieItem}>
            <Link
                href={{
                    pathname: '/MovieDetails/[id]',
                    params: { id: item.id },
                }}
            >
                <View>
                    <Image
                        source={{
                            uri: item.poster_path
                                ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                                : fallbackPoster,
                        }}
                        style={styles.movieImage}
                    />
                    <Text style={styles.movieTitle}>
                        {item.title.length > 20 ? `${item.title.slice(0, 20)}...` : item.title}
                    </Text>
                </View>
            </Link>
        </TouchableOpacity>
    );

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <View style={{ marginVertical: 20 }}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <FlatList
                data={data}
                renderItem={renderMovieItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    movieItem: {
        marginRight: 15,
        alignItems: 'center',
        width: 120,
        marginLeft: 10
    },
    movieImage: {
        width: 100,
        height: 150,
        borderRadius: 8,
        marginBottom: 5,
        backgroundColor: '#ccc',
    },
    movieTitle: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 10,
        color: 'black',
    },
});

export default MovieList;

