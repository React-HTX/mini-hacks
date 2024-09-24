import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, StatusBar, Text, TouchableOpacity } from 'react-native';
import { fetchTrendingMovies, fetchUpcomingMovies, fetchTopRatedMovies } from '@/utils/request';
import MovieList from '../../components/MovieList';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { Link } from 'expo-router';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export default function MoviesScreen() {
  const [trending, setTrending] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();
  }, []);

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    if (data && data.results) setTrending(data.results);
    setLoading(false);
  };

  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingMovies();
    if (data && data.results) setUpcoming(data.results);
  };

  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies();
    if (data && data.results) setTopRated(data.results);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.headerContainer}>
        <Bars3CenterLeftIcon size={30} strokeWidth={2} color="black" />
        <Text style={styles.title}>
          <Text style={styles.brandLetter}>M</Text>ovies
        </Text>
        <TouchableOpacity>
          <Link replace href={'/SearchScreen'}>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="black" />
          </Link>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.container}>
          <MovieList title="Trending Movies" data={trending} loading={loading} />
          <MovieList title="Upcoming Movies" data={upcoming} loading={loading} />
          <MovieList title="Top Rated Movies" data={topRated} loading={loading} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    paddingTop: 50,
  },
  title: {
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
  },
  brandLetter: {
    color: '#E50914',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  searchInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 16,
    color: 'black',
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 20,
  },
});
